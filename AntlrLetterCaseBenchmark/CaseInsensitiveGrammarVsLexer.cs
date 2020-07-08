using System.Text;
using Antlr4.Runtime;
using AntlrUtils;
using BenchmarkDotNet.Attributes;

namespace AntlrLetterCaseBenchmark
{
    public class CaseInsensitiveGrammarVsLexer
    {
        private readonly string data;
        private readonly ConsoleErrorListener errorListener = new ConsoleErrorListener();

        public CaseInsensitiveGrammarVsLexer()
        {
            data = GenerateData();
        }

        private static string GenerateData()
        {
            var result = new StringBuilder();

            var word = GenerateWord();

            for (int i = 0; i < 10000; i++)
            {
                result.Append(word);
                result.Append(' ');
            }

            return result.ToString();
        }

        private static string GenerateWord()
        {
            var wordBuilder = new StringBuilder('Z' - 'A' + 1);
            for (char c = 'A'; c <= 'Z'; c++)
            {
                wordBuilder.Append(c);
            }

            return wordBuilder.ToString();
        }

        [Benchmark(Baseline = true)]
        public void CaseInsensitiveLexerTest()
        {
            var stream = new CaseInsensitiveInputStream(data);
            var lexer = new CaseInsensitiveLexer(stream);
            lexer.AddErrorListener(errorListener);
            var tokens = lexer.GetAllTokens();
        }

        [Benchmark]
        public void CaseInsensitiveGrammarTest()
        {
            var stream = new AntlrInputStream(data);
            var lexer = new CaseInsensitiveGrammar(stream);
            lexer.AddErrorListener(errorListener);
            var tokens = lexer.GetAllTokens();
        }
    }
}