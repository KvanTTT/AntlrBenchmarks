import sys
from antlr4.InputStream import InputStream
from antlr4.CommonTokenStream import CommonTokenStream
from antlr4.ListTokenSource import ListTokenSource
from antlr4.atn.PredictionMode import PredictionMode
from LeftRecursionGrammarLexer import LeftRecursionGrammarLexer
from LeftRecursionGrammarParser import LeftRecursionGrammarParser
import timeit

terms_count = 128
mode = "SLL"
warm_up_count = 4
iteration_count = 64

tokens = []


def main(argv):
    data = generate_data()
    code_stream = InputStream(data)
    lexer = LeftRecursionGrammarLexer(code_stream)
    global tokens, mode
    tokens = lexer.getAllTokens()

    mode = "SLL"
    sll_left_recursion = benchmark_average("left_recursion_test", "SLL")
    sll_not_left_recursion = benchmark_average("not_left_recursion_test", "SLL")

    mode = "LL"
    ll_left_recursion = benchmark_average("left_recursion_test", "LL")
    ll_not_left_recursion = benchmark_average("not_left_recursion_test", "LL")

    print("")

    print("SLL:")
    print(f"left recursion: {sll_left_recursion} us")
    print(f"not left recursion: {sll_not_left_recursion} us")
    print(f"ratio: {sll_not_left_recursion / sll_left_recursion:0.2f}")

    print("")

    print("LL:")
    print(f"left recursion: {ll_left_recursion} us")
    print(f"not left recursion: {ll_not_left_recursion} us")
    print(f"ratio: {ll_not_left_recursion / ll_left_recursion:0.2f}")


def generate_data():
    result = ""

    term = "x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5"

    for i in range(terms_count):
        result += term
        if i < terms_count - 1:
            result += " || "

    return result


def benchmark_average(func_name, comment):
    func_call = f"{func_name}()"
    setup_str = f"from __main__ import {func_name}"

    print(f"function {func_name} ({comment}):")

    print("warm up...")
    timeit.timeit(func_call, setup=setup_str, number=warm_up_count)
    print("warm up completed.")

    print("benchmark...")
    avg_time = timeit.timeit(func_call, setup=setup_str, number=iteration_count) / iteration_count
    print("benchmark completed.")

    print("")

    return int(round(avg_time * 1_000_000)) # return result in microseconds


def left_recursion_test():
    create_parser().leftRecExprRoot()
    pass


def not_left_recursion_test():
    create_parser().notLeftRecExprRoot()
    pass


def create_parser():
    tokens_source = ListTokenSource(tokens)
    tokens_stream = CommonTokenStream(tokens_source)
    parser = LeftRecursionGrammarParser(tokens_stream)
    parser.buildParseTrees = False
    parser._interp.predictionMode = PredictionMode.SLL if mode == "SLL" else PredictionMode.LL
    return parser


if __name__ == '__main__':
    main(sys.argv)