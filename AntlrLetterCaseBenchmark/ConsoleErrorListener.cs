using System;
using Antlr4.Runtime;

[assembly: CLSCompliant(false)]

namespace AntlrUtils
{
    public class ConsoleErrorListener : IAntlrErrorListener<IToken>, IAntlrErrorListener<int>
    {
        public void SyntaxError(IRecognizer recognizer, IToken offendingSymbol, int line, int charPositionInLine, string msg,
            RecognitionException e)
        {
            Console.WriteLine($"Parse error: {msg} at {line}:{charPositionInLine}");
        }

        public void SyntaxError(IRecognizer recognizer, int offendingSymbol, int line, int charPositionInLine, string msg,
            RecognitionException e)
        {
            Console.WriteLine($"Lexical error: {msg} at {line}:{charPositionInLine}");
        }
    }
}