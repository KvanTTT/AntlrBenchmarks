using System;
using System.Globalization;
using System.IO;
using Antlr4.Runtime;
using Antlr4.Runtime.Atn;
using AntlrBenchmarks;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Columns;
using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Exporters.Csv;
using BenchmarkDotNet.Running;
using Perfolizer.Horology;

#if CSharpOptimized
using Antlr4.Runtime.Misc;
#endif

[assembly: CLSCompliant(false)]

public class __TemplateGrammarName__Tests
{
    private static string InputFileName;
    private static string Mode = "sll";
    private static bool BuildParseTree;

    private readonly ParserErrorListener errorListener = new ParserErrorListener();
    private CommonTokenStream tokenStream;

    static void Main(string[] args)
    {
        if (args.Length > 0)
        {
            InputFileName = args[0];
            if (args.Length > 1)
            {
                Mode = args[1].ToLowerInvariant();
                if (args.Length > 2)
                {
                    BuildParseTree = bool.Parse(args[2].ToLowerInvariant());
                }
            }
        }
        var config = ManualConfig.Create(DefaultConfig.Instance);
        config.AddExporter(new CsvExporter(
            CsvSeparator.Semicolon,
            new BenchmarkDotNet.Reports.SummaryStyle(CultureInfo.InvariantCulture, true,
                SizeUnit.B, TimeUnit.Nanosecond, false, true)));
        BenchmarkRunner.Run<__TemplateGrammarName__Tests>(config);
    }

    [GlobalSetup]
    public void Init()
    {
        var data = File.ReadAllText(InputFileName != null ? InputFileName : "default_input_file");
        var stream = new AntlrInputStream(data);
        var lexer = new __TemplateGrammarName__Lexer(stream);
        lexer.AddErrorListener(new LexerErrorListener());
        tokenStream = new CommonTokenStream(lexer);
    }

    [Benchmark]
    public object __TemplateGrammarName_____RuntimeName__()
    {
        tokenStream.Reset();
        var parser = new __TemplateGrammarName__Parser(tokenStream);
        parser.BuildParseTree = BuildParseTree;
        parser.Interpreter.PredictionMode = Mode == "sll" ?
#if CSharpOptimized
            PredictionMode.Sll
#else
            PredictionMode.SLL
#endif
            :
#if CSharpOptimized
            PredictionMode.Ll
#else
            PredictionMode.LL
#endif
            ;
        parser.AddErrorListener(errorListener);
        return parser.root();
    }
}

class LexerErrorListener : IAntlrErrorListener<int>
{
#if CSharpOptimized
    public void SyntaxError([NotNull] IRecognizer recognizer, [Nullable] int offendingSymbol, int line, int charPositionInLine, [NotNull] string msg, [Nullable] RecognitionException e)
#else
    public void SyntaxError(TextWriter output, IRecognizer recognizer, int offendingSymbol, int line, int charPositionInLine, string msg, RecognitionException e)
#endif
    {
        Console.Error.WriteLine($"Lexical error: {msg} at {line}:{charPositionInLine}");
    }
}

class ParserErrorListener : IAntlrErrorListener<IToken>
{
#if CSharpOptimized
    public void SyntaxError([NotNull] IRecognizer recognizer, [Nullable] IToken offendingSymbol, int line, int charPositionInLine, [NotNull] string msg, [Nullable] RecognitionException e)
#else
    public void SyntaxError(TextWriter output, IRecognizer recognizer, IToken offendingSymbol, int line, int charPositionInLine, string msg, RecognitionException e)
#endif
    {
        Console.Error.WriteLine($"Parse error: {msg} at {line}:{charPositionInLine}");
    }
}