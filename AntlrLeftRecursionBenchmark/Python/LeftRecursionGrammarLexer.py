from antlr4 import *
from io import StringIO
from typing.io import TextIO
import sys



def serializedATN():
    with StringIO() as buf:
        buf.write("\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\21")
        buf.write("M\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7")
        buf.write("\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16")
        buf.write("\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\3\4\3\4\3\5")
        buf.write("\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3")
        buf.write("\n\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\7\16@\n\16")
        buf.write("\f\16\16\16C\13\16\3\17\6\17F\n\17\r\17\16\17G\3\20\3")
        buf.write("\20\3\20\3\20\2\2\21\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21")
        buf.write("\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21\3\2\6\5\2C")
        buf.write("\\aac|\6\2\62;C\\aac|\3\2\62;\5\2\13\f\17\17\"\"\2N\2")
        buf.write("\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3")
        buf.write("\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2")
        buf.write("\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2")
        buf.write("\2\2\35\3\2\2\2\2\37\3\2\2\2\3!\3\2\2\2\5#\3\2\2\2\7%")
        buf.write("\3\2\2\2\t\'\3\2\2\2\13)\3\2\2\2\r+\3\2\2\2\17-\3\2\2")
        buf.write("\2\21\60\3\2\2\2\23\63\3\2\2\2\25\66\3\2\2\2\279\3\2\2")
        buf.write("\2\31;\3\2\2\2\33=\3\2\2\2\35E\3\2\2\2\37I\3\2\2\2!\"")
        buf.write("\7`\2\2\"\4\3\2\2\2#$\7,\2\2$\6\3\2\2\2%&\7\61\2\2&\b")
        buf.write("\3\2\2\2\'(\7\'\2\2(\n\3\2\2\2)*\7-\2\2*\f\3\2\2\2+,\7")
        buf.write("/\2\2,\16\3\2\2\2-.\7?\2\2./\7?\2\2/\20\3\2\2\2\60\61")
        buf.write("\7#\2\2\61\62\7?\2\2\62\22\3\2\2\2\63\64\7(\2\2\64\65")
        buf.write("\7(\2\2\65\24\3\2\2\2\66\67\7~\2\2\678\7~\2\28\26\3\2")
        buf.write("\2\29:\7A\2\2:\30\3\2\2\2;<\7<\2\2<\32\3\2\2\2=A\t\2\2")
        buf.write("\2>@\t\3\2\2?>\3\2\2\2@C\3\2\2\2A?\3\2\2\2AB\3\2\2\2B")
        buf.write("\34\3\2\2\2CA\3\2\2\2DF\t\4\2\2ED\3\2\2\2FG\3\2\2\2GE")
        buf.write("\3\2\2\2GH\3\2\2\2H\36\3\2\2\2IJ\t\5\2\2JK\3\2\2\2KL\b")
        buf.write("\20\2\2L \3\2\2\2\5\2AG\3\2\3\2")
        return buf.getvalue()


class LeftRecursionGrammarLexer(Lexer):

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    CARET = 1
    STAR = 2
    SLASH = 3
    PERCENT = 4
    PLUS = 5
    MINUS = 6
    EQUAL = 7
    NOT_EQUAL = 8
    LOGICAL_AND = 9
    LOGICAL_OR = 10
    QUESTION = 11
    COLON = 12
    ID = 13
    DIGIT = 14
    WS = 15

    channelNames = [ u"DEFAULT_TOKEN_CHANNEL", u"HIDDEN" ]

    modeNames = [ "DEFAULT_MODE" ]

    literalNames = [ "<INVALID>",
            "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'=='", "'!='", "'&&'",
            "'||'", "'?'", "':'" ]

    symbolicNames = [ "<INVALID>",
            "CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS", "EQUAL",
            "NOT_EQUAL", "LOGICAL_AND", "LOGICAL_OR", "QUESTION", "COLON",
            "ID", "DIGIT", "WS" ]

    ruleNames = [ "CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS",
                  "EQUAL", "NOT_EQUAL", "LOGICAL_AND", "LOGICAL_OR", "QUESTION",
                  "COLON", "ID", "DIGIT", "WS" ]

    grammarFileName = "LeftRecursionGrammar.g4"

    def __init__(self, input=None, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.8")
        self._interp = LexerATNSimulator(self, self.atn, self.decisionsToDFA, PredictionContextCache())
        self._actions = None
        self._predicates = None


