using System;
using BenchmarkDotNet.Running;

[assembly: CLSCompliant(false)]

namespace AntlrLetterCaseBenchmark
{
    static class Program
    {
        static void Main()
        {
            BenchmarkRunner.Run<CaseInsensitiveGrammarVsLexer>();
        }
    }
}