using System;
using System.Diagnostics;
using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Running;

namespace AntlrLetterCaseBenchmark
{
    static class Program
    {
        static void Main()
        {
            ManualTest();
            ManualTest();

            BenchmarkRunner.Run<CaseInsensitiveGrammarVsLexer>();
        }

        private static void ManualTest()
        {
            var tester = new CaseInsensitiveGrammarVsLexer();

            var stopwatch = Stopwatch.StartNew();
            tester.CaseInsensitiveGrammarTest();
            stopwatch.Stop();

            Console.WriteLine($"CaseInsensitive Grammar Time: {stopwatch.Elapsed}");

            stopwatch.Restart();
            tester.CaseInsensitiveLexerTest();
            stopwatch.Stop();

            Console.WriteLine($"CaseInsensitive Lexer Time: {stopwatch.Elapsed}");
        }
    }
}