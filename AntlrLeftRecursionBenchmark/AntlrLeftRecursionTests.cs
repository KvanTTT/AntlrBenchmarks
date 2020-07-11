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

        private IList<AntlrOptimized::Antlr4.Runtime.IToken> optimizedTokens;
        private IList<AntlrStandard::Antlr4.Runtime.IToken> standardTokens;

        [GlobalSetup]
        public void Init()
        {
            var data = GenerateData();

            var optimizedStream = new AntlrOptimizedRuntime.AntlrInputStream(data);
            var optimizedLexer = new AntlrOptimized.LeftRecursionGrammarLexer(optimizedStream);
            optimizedLexer.AddErrorListener(optimizedErrorListener);
            optimizedTokens = optimizedLexer.GetAllTokens();

            var standardStream = new AntlrStandardRuntime.AntlrInputStream(data);
            var standardLexer = new AntlrStandard.LeftRecursionGrammarLexer(standardStream);
            standardLexer.AddErrorListener(standardErrorListener);
            standardTokens = standardLexer.GetAllTokens();
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
        public void LeftRecursionTest()
        {
            if (Runtime == "Optimized")
            {
                CreateOptimizedParser().leftRecExprRoot();
            }
            else
            {
                CreateStandardParser().leftRecExprRoot();
            }
        }

        [Benchmark]
        public void NotLeftRecursionTest()
        {
            if (Runtime == "Optimized")
            {
                CreateOptimizedParser().notLeftRecExprRoot();
            }
            else
            {
                CreateStandardParser().notLeftRecExprRoot();
            }
        }

        private AntlrOptimized.LeftRecursionGrammarParser CreateOptimizedParser()
        {
            var listTokenSource = new AntlrOptimizedRuntime.ListTokenSource(optimizedTokens);
            var tokenStream = new AntlrOptimizedRuntime.CommonTokenStream(listTokenSource);
            var parser = new AntlrOptimized.LeftRecursionGrammarParser(tokenStream);
            parser.BuildParseTree = false;
            parser.Interpreter.PredictionMode = Mode == "SLL" ? AntlrOptimizedRuntime.Atn.PredictionMode.Sll : AntlrOptimizedRuntime.Atn.PredictionMode.Ll;
            parser.AddErrorListener(optimizedErrorListener);
            return parser;
        }

        private AntlrStandard.LeftRecursionGrammarParser CreateStandardParser()
        {
            var listTokenSource = new AntlrStandardRuntime.ListTokenSource(standardTokens);
            var tokenStream = new AntlrStandardRuntime.CommonTokenStream(listTokenSource);
            var parser = new AntlrStandard.LeftRecursionGrammarParser(tokenStream);
            parser.BuildParseTree = false;
            parser.Interpreter.PredictionMode = Mode == "SLL" ? AntlrStandardRuntime.Atn.PredictionMode.SLL : AntlrStandardRuntime.Atn.PredictionMode.LL;
            parser.AddErrorListener(standardErrorListener);
            return parser;
        }
    }
}