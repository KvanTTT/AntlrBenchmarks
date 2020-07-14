extern alias AntlrStandard;
extern alias AntlrOptimized;

using System.Collections.Generic;
using System.Text;
using BenchmarkDotNet.Attributes;
using AntlrOptimizedRuntime = AntlrOptimized::Antlr4.Runtime;
using AntlrStandardRuntime = AntlrStandard::Antlr4.Runtime;

namespace AntlrLeftRecursionBenchmark
{
    public class AntlrLeftRecursionTests
    {
        private const int TermsCount = 128;
        private readonly AntlrOptimized.ConsoleErrorListener optimizedErrorListener = new AntlrOptimized.ConsoleErrorListener();
        private readonly AntlrStandard.ConsoleErrorListener standardErrorListener = new AntlrStandard.ConsoleErrorListener();

        private AntlrOptimizedRuntime.CommonTokenStream optimizedTokenStream;
        private AntlrStandardRuntime.CommonTokenStream standardTokenStream;

        [GlobalSetup]
        public void Init()
        {
            var data = GenerateData();

            var optimizedStream = new AntlrOptimizedRuntime.AntlrInputStream(data);
            var optimizedLexer = new AntlrOptimized.LeftRecursionGrammarLexer(optimizedStream);
            optimizedLexer.AddErrorListener(optimizedErrorListener);
            optimizedTokenStream = new AntlrOptimizedRuntime.CommonTokenStream(optimizedLexer);

            var standardStream = new AntlrStandardRuntime.AntlrInputStream(data);
            var standardLexer = new AntlrStandard.LeftRecursionGrammarLexer(standardStream);
            standardLexer.AddErrorListener(standardErrorListener);
            standardTokenStream = new AntlrStandardRuntime.CommonTokenStream(standardLexer);
        }

        private string GenerateData()
        {
            var result = new StringBuilder();

            // x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5 || x_1_0 && x_1_1 == x_1_2 + x_1_3 * x_1_4 ^ x_1_5 || ... || x_n_0 && x_n_1 == x_n_2 + x_n_3 * x_n_4 ^ x_n_5

            //var term = "x_0_0";
            var term = "x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5";
            //var term = "x_0_0 ^ x_0_1 * x_0_2 + x_0_3 == x_0_4 && x_0_5";

            for (int i = 0; i < TermsCount; i++)
            {
                result.Append(term);
                if (i < TermsCount - 1)
                {
                    result.Append(" || ");
                }
            }

            return result.ToString();
        }

        [Params("SLL", "LL")] public string Mode { get; set; } = "SLL";

        [Params("Optimized", "Standard")] public string Runtime { get; set; } = "Optimized";

        [Benchmark(Baseline = true)]
        public object LeftRecursionTest()
        {
            if (Runtime == "Optimized")
            {
                return CreateOptimizedParser().leftRecExprRoot();
            }

            return CreateStandardParser().leftRecExprRoot();
        }

        [Benchmark]
        public object NotLeftRecursionTest()
        {
            if (Runtime == "Optimized")
            {
                return CreateOptimizedParser().notLeftRecExprRoot();
            }

            return CreateStandardParser().notLeftRecExprRoot();
        }

        private AntlrOptimized.LeftRecursionGrammarParser CreateOptimizedParser()
        {
            optimizedTokenStream.Reset();
            var parser = new AntlrOptimized.LeftRecursionGrammarParser(optimizedTokenStream);
            parser.BuildParseTree = false;
            parser.Interpreter.PredictionMode = Mode == "SLL" ? AntlrOptimizedRuntime.Atn.PredictionMode.Sll : AntlrOptimizedRuntime.Atn.PredictionMode.Ll;
            parser.AddErrorListener(optimizedErrorListener);
            return parser;
        }

        private AntlrStandard.LeftRecursionGrammarParser CreateStandardParser()
        {
            standardTokenStream.Reset();
            var parser = new AntlrStandard.LeftRecursionGrammarParser(standardTokenStream);
            parser.BuildParseTree = false;
            parser.Interpreter.PredictionMode = Mode == "SLL" ? AntlrStandardRuntime.Atn.PredictionMode.SLL : AntlrStandardRuntime.Atn.PredictionMode.LL;
            parser.AddErrorListener(standardErrorListener);
            return parser;
        }
    }
}