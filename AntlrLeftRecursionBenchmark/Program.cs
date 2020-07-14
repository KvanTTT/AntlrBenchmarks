using System;
using BenchmarkDotNet.Running;

[assembly: CLSCompliant(false)]

namespace AntlrLeftRecursionBenchmark
{
    static class Program
    {
        static void Main()
        {
            /*var tests = new AntlrLeftRecursionTests();
            tests.Init();
            tests.NotLeftRecursionTest();
            tests.NotLeftRecursionTest();
            tests.LeftRecursionTest();*/

            BenchmarkRunner.Run<AntlrLeftRecursionTests>();
        }
    }
}