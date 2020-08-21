package antlrbenchmarks;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.PredictionMode;
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@State(Scope.Benchmark)
@Fork(value = 1)
@Warmup(iterations = 1)
@Measurement(iterations = 3)
public class __TemplateGrammarName__ {
    public static String InputFileName;
    public static String Mode = "sll";
    public static Boolean BuildParseTree = false;

    private CommonTokenStream tokenStream;

    public static void main(String[] args) throws RunnerException {
        if (args.length > 0)
        {
            InputFileName = args[0];
            if (args.length > 1)
            {
                Mode = args[1].toLowerCase();
                if (args.length > 2)
                {
                    BuildParseTree = Boolean.parseBoolean(args[2].toLowerCase());
                }
            }
        }

        Options opt = new OptionsBuilder()
                .include(__TemplateGrammarName__.class.getSimpleName())
                .build();

        new Runner(opt).run();
    }

    @Setup
    public void init() throws IOException {
        CharStream codeStream = CharStreams.fromFileName(InputFileName != null ? InputFileName : "default_input_file");
        __TemplateGrammarName__Lexer lexer = new __TemplateGrammarName__Lexer(codeStream);
        tokenStream = new CommonTokenStream(lexer);
        __TemplateGrammarName_____RuntimeName__();
    }

    @Benchmark
    public Object __TemplateGrammarName_____RuntimeName__() {
        tokenStream.seek(0);
        __TemplateGrammarName__Parser parser = new __TemplateGrammarName__Parser(tokenStream);
        parser.setBuildParseTree(BuildParseTree);
        parser.getInterpreter().setPredictionMode(Mode.equals("sll") ? PredictionMode.SLL : PredictionMode.LL);
        return parser.root();
    }
}
