# ANTLR Benchmarks

The repository contains benchmarks of different grammars over different runtimes:

* Java Standard
* [Java Optimized](https://github.com/tunnelvisionlabs/antlr4)
* C# Standard
* [C# Optimized](https://github.com/tunnelvisionlabs/antlr4cs)
* Python 3
* JavaScript (nodejs)
* Go
* Php

The integration of other runtimes (C++, Swift) is under development.

## How to run

Just run the script `./benchmark.ps1` in `Benchmark` directory

## Requirements

* Powershell
* Installed runtimes that you want to benchmark (.NET Core, Java, Python 3, NodeJS, Go, Php)
* Installed antlr4 runtimes on the runtimes

## Method of benchmarking

The following libraries are used for benchmarking:

* Java: [JMH](https://openjdk.java.net/projects/code-tools/jmh/)
* C#: [BenchmarkDotNet](https://benchmarkdotnet.org/)
* Php: [phpbench](https://github.com/phpbench/phpbench)
* Python: [timeit function](https://docs.python.org/3/library/timeit.html)
* JavaScript, Go: manual measurement using warmup and many iterations

## Results

Here is an example of NotLeft vs Left Recursion comparison. The main parameter
is `Ratio`, the `Mean` parameter can be different from machine to machine.

### Not Left Recursion

| Runtime                                 |  Mean [ns] |      Ratio |
| ---                                     |        --- |        --- |
| JavaStandard_NotLeftRecursion           |     150702 |       1,00 |
| JavaOptimized_NotLeftRecursion          |     147858 |       0,98 |
| CSharpOptimized_NotLeftRecursion        |     322393 |       2,14 |
| Python3Standard_NotLeftRecursion        |   31555147 |     209,39 |
| JavaScriptStandard_NotLeftRecursion     |     594170 |       3,94 |
| GoStandard_NotLeftRecursion             |     789169 |       5,24 |
| PhpStandard_NotLeftRecursion            |  166762375 |    1106,57 |

### Left Recursion

| Runtime                                 |  Mean [ns] |      Ratio |
| ---                                     |        --- |        --- |
| JavaStandard_LeftRecursion              |     173714 |       1,15 |
| JavaOptimized_LeftRecursion             |     415581 |       2,76 |
| CSharpOptimized_LeftRecursion           |    1302527 |       8,64 |
| Python3Standard_LeftRecursion           |   41263081 |     273,81 |
| JavaScriptStandard_LeftRecursion        |     618468 |       4,10 |
| GoStandard_LeftRecursion                |    1023692 |       6,79 |
| PhpStandard_LeftRecursion               |  258153250 |    1713,00 |

As we see NotLeftRecursion grammar is faster than LeftRecursion one on ~15% in
the worst case.

Java runtime is the fastest and PHP runtime is the slowest:
more than 1000 times slower than Java.