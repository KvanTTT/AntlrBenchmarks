using BenchmarkDotNet.Running;

namespace AntlrLeftRecursionBenchmark
{
    static class Program
    {
        static void Main()
        {
            /*var tests = new AntlrLeftRecursionTests();
            tests.NotLeftRecursionTest();
            tests.LeftRecursionTest();*/

            BenchmarkRunner.Run<AntlrLeftRecursionTests>();
        }
    }
}