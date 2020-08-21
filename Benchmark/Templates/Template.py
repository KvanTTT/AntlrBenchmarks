import sys
from antlr4.InputStream import InputStream
from antlr4.CommonTokenStream import CommonTokenStream
from antlr4.atn.PredictionMode import PredictionMode
from __TemplateGrammarName__Lexer import __TemplateGrammarName__Lexer
from __TemplateGrammarName__Parser import __TemplateGrammarName__Parser
import timeit

warm_up_count = 32
iteration_count = 128

mode = "sll"
build_parse_tree = False
token_stream = None


def main(argv):
    global mode, build_parse_tree, token_stream

    input_file_name = "default_input_file"

    if len(argv) > 1:
        input_file_name = argv[1]

        if len(argv) > 2:
            mode = argv[2].lower()

            if len(argv) > 3:
                build_parse_tree = argv[3].lower() == "true"

    data = ""
    with open("default_input_file", "r") as file:
        data = file.read().replace("\n", "")
    code_stream = InputStream(data)
    lexer = __TemplateGrammarName__Lexer(code_stream)
    token_stream = CommonTokenStream(lexer)

    __TemplateGrammarName_____RuntimeName__()
    benchmark(True, warm_up_count)
    time = benchmark(False, iteration_count)

    with open("__TemplateGrammarName_____RuntimeName__.benchmark", "w") as result_file:
        result_file.write(str(time))


def benchmark(warmUp, iteration_count):
    print("warming up..." if warmUp else "benchmarking...")
    setup_str = f"from __main__ import __TemplateGrammarName_____RuntimeName__"
    time = timeit.timeit("__TemplateGrammarName_____RuntimeName__()", setup=setup_str, number=iteration_count) / iteration_count
    ms = str(int(round(time * 1_000_000)))
    print(("warming up: " if warmUp else "__TemplateGrammarName_____RuntimeName__: ") + ms + " us")
    return time * 1_000_000_000


def __TemplateGrammarName_____RuntimeName__():
    token_stream.reset()
    parser = __TemplateGrammarName__Parser(token_stream)
    parser.buildParseTrees = False
    parser._interp.predictionMode = PredictionMode.SLL if mode == "sll" else PredictionMode.LL
    return parser.root()


if __name__ == '__main__':
    main(sys.argv)