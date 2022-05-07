import sys
from antlr4.InputStream import InputStream
from antlr4.CommonTokenStream import CommonTokenStream
from PLexer import PLexer
from PParserConstFolding import PParser as PParserConstFolding
from PParserNoConstFolding import PParser as PParserNoConstFolding
import timeit

warm_up_count = 4
iteration_count = 128
tokens_stream = None


def main(argv):
    data = "T0 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 T15 T16 T17 T18 T19 T20 T21 T22 T23 T24 T25 T26 T27 T28 T29 T30 T31 T32 T33 T34 T35 T36 T37 T38 T39 T40 T41 T42 T43 T44 T45 T46 T47 T48 T49 T50 T51 T52 T53 T54 T55 T56 T57 T58 T59 T60 T61 T62 T63"
    code_stream = InputStream(data)
    lexer = PLexer(code_stream)
    global mode, tokens_stream
    tokens_stream = CommonTokenStream(lexer)

    no_const_folding = benchmark_average("no_const_folding_test")
    const_folding = benchmark_average("const_folding_test")

    print(f"no_const_folding: {no_const_folding} ns")
    print(f"const_folding: {const_folding} ns")
    print(f"ratio: {const_folding / no_const_folding:0.4f}")

def benchmark_average(func_name):
    func_call = f"{func_name}()"
    setup_str = f"from __main__ import {func_name}"

    print(f"function {func_name}:")

    print("warm up...")
    timeit.timeit(func_call, setup=setup_str, number=warm_up_count)
    print("warm up completed.")

    print("benchmark...")
    avg_time = timeit.timeit(func_call, setup=setup_str, number=iteration_count) / iteration_count
    print("benchmark completed.")

    print("")

    return int(round(avg_time * 1_000_000_000))


def const_folding_test():
    tokens_stream.reset()
    parser = PParserConstFolding(tokens_stream)
    parser.buildParseTrees = False
    return parser.r()


def no_const_folding_test():
    tokens_stream.reset()
    parser = PParserNoConstFolding(tokens_stream)
    parser.buildParseTrees = False
    return parser.r()


if __name__ == '__main__':
    main(sys.argv)