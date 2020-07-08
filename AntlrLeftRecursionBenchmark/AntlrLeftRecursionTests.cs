using System;
using System.Collections.Generic;
using System.Text;
using Antlr4.Runtime;
using AntlrUtils;
using BenchmarkDotNet.Attributes;

namespace AntlrLeftRecursionBenchmark
{
    public class AntlrLeftRecursionTests
    {
        private const int TermsCount = 256;
        private readonly ConsoleErrorListener errorListener = new ConsoleErrorListener();

        private readonly IList<IToken> tokens;

        public AntlrLeftRecursionTests()
        {
            var data = GenerateData();
            var stream = new AntlrInputStream(data);
            var lexer = new LeftRecursionGrammarLexer(stream);
            lexer.AddErrorListener(errorListener);
            tokens = lexer.GetAllTokens();
        }

        private string GenerateData()
        {
            var result = new StringBuilder();

            // x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5 || x_1_0 && x_1_1 == x_1_2 + x_1_3 * x_1_4 ^ x_1_5 || ... || x_n_0 && x_n_1 == x_n_2 + x_n_3 * x_n_4 ^ x_n_5

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

        [Benchmark(Baseline = true)]
        public void LeftRecursionTest()
        {
            var result = CreateParser().leftRecExpr();
            //Console.WriteLine(result.ChildCount);
        }

        [Benchmark]
        public void NotLeftRecursionTest()
        {
            var result = CreateParser().notLeftRexExpr();
            //Console.WriteLine(result.ChildCount);
        }

        private LeftRecursionGrammarParser CreateParser()
        {
            var listTokenSource = new ListTokenSource(tokens);
            var tokenStream = new CommonTokenStream(listTokenSource);
            var parser = new LeftRecursionGrammarParser(tokenStream);
            parser.BuildParseTree = false;
            parser.AddErrorListener(errorListener);
            return parser;
        }
    }
}