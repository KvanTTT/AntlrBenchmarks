extern alias AntlrStandard;
using System;
using System.IO;
using AntlrStandard::Antlr4.Runtime;

namespace AntlrStandard
{
    public class ConsoleErrorListener : IAntlrErrorListener<IToken>, IAntlrErrorListener<int>
    {
        public void SyntaxError(TextWriter output, IRecognizer recognizer, IToken offendingSymbol, int line, int charPositionInLine,
            string msg, RecognitionException e)
        {
            Console.WriteLine($"Parse error: {msg} at {line}:{charPositionInLine}");
        }

        public void SyntaxError(TextWriter output, IRecognizer recognizer, int offendingSymbol, int line, int charPositionInLine,
            string msg, RecognitionException e)
        {
            Console.WriteLine($"Lexical error: {msg} at {line}:{charPositionInLine}");
        }
    }
}