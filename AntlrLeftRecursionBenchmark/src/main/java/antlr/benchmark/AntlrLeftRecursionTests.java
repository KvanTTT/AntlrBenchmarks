package antlr.benchmark;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.PredictionMode;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;

import java.util.List;
import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.MICROSECONDS)
@State(Scope.Benchmark)
@Fork(value = 1)
@Warmup(iterations = 2)
@Measurement(iterations = 3)
public class AntlrLeftRecursionTests {
    private static final int TermsCount = 128;
    private List<? extends Token> tokens;

    public static void main(String[] args) throws RunnerException {
        Options opt = new OptionsBuilder()
                .include(AntlrLeftRecursionTests.class.getSimpleName())
                .build();

        new Runner(opt).run();
    }

    @Setup
    public void setup() {
        String data = generateData();
        CharStream codeStream = CharStreams.fromString(data);
        LeftRecursionGrammarLexer lexer = new LeftRecursionGrammarLexer(codeStream);
        tokens = lexer.getAllTokens();
    }

    private String generateData()
    {
        StringBuilder result = new StringBuilder();

        // x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5 || x_1_0 && x_1_1 == x_1_2 + x_1_3 * x_1_4 ^ x_1_5 || ... || x_n_0 && x_n_1 == x_n_2 + x_n_3 * x_n_4 ^ x_n_5

        //var term = "x_0_0";
        String term = "x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5";
        //var term = "x_0_0 ^ x_0_1 * x_0_2 + x_0_3 == x_0_4 && x_0_5";

        for (int i = 0; i < TermsCount; i++)
        {
            result.append(term);
            if (i < TermsCount - 1)
            {
                result.append(" || ");
            }
        }

        return result.toString();
    }

    @Param({"SLL", "LL"})
    public String mode;

    @Benchmark
    public void leftRecursionTest() {
        createParser().leftRecExprRoot();
    }

    @Benchmark
    public void notLeftRecursionTest() {
        createParser().notLeftRecExprRoot();
    }

    private LeftRecursionGrammarParser createParser()
    {
        ListTokenSource listTokenSource = new ListTokenSource(tokens);
        CommonTokenStream tokenStream = new CommonTokenStream(listTokenSource);
        LeftRecursionGrammarParser parser = new LeftRecursionGrammarParser(tokenStream);
        parser.setBuildParseTree(false);
        parser.getInterpreter().setPredictionMode(mode.equals("SLL") ? PredictionMode.SLL : PredictionMode.LL);
        return parser;
    }
}
