# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO


def serializedATN():
    with StringIO() as buf:
        buf.write("\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21")
        buf.write("i\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b")
        buf.write("\t\b\4\t\t\t\4\n\t\n\4\13\t\13\3\2\3\2\3\2\3\3\3\3\3\3")
        buf.write("\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3")
        buf.write("\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\7\4\62\n\4\f\4\16\4\65")
        buf.write("\13\4\3\5\3\5\3\5\7\5:\n\5\f\5\16\5=\13\5\3\6\3\6\3\6")
        buf.write("\7\6B\n\6\f\6\16\6E\13\6\3\7\3\7\3\7\7\7J\n\7\f\7\16\7")
        buf.write("M\13\7\3\b\3\b\3\b\7\bR\n\b\f\b\16\bU\13\b\3\t\3\t\3\t")
        buf.write("\7\tZ\n\t\f\t\16\t]\13\t\3\n\3\n\3\n\7\nb\n\n\f\n\16\n")
        buf.write("e\13\n\3\13\3\13\3\13\2\3\6\f\2\4\6\b\n\f\16\20\22\24")
        buf.write("\2\6\3\2\4\6\3\2\7\b\3\2\t\n\3\2\17\20\2j\2\26\3\2\2\2")
        buf.write("\4\31\3\2\2\2\6\34\3\2\2\2\b\66\3\2\2\2\n>\3\2\2\2\fF")
        buf.write("\3\2\2\2\16N\3\2\2\2\20V\3\2\2\2\22^\3\2\2\2\24f\3\2\2")
        buf.write("\2\26\27\5\6\4\2\27\30\7\2\2\3\30\3\3\2\2\2\31\32\5\b")
        buf.write("\5\2\32\33\7\2\2\3\33\5\3\2\2\2\34\35\b\4\1\2\35\36\5")
        buf.write("\24\13\2\36\63\3\2\2\2\37 \f\b\2\2 !\7\3\2\2!\62\5\6\4")
        buf.write("\b\"#\f\7\2\2#$\t\2\2\2$\62\5\6\4\b%&\f\6\2\2&\'\t\3\2")
        buf.write("\2\'\62\5\6\4\7()\f\5\2\2)*\t\4\2\2*\62\5\6\4\6+,\f\4")
        buf.write("\2\2,-\7\13\2\2-\62\5\6\4\5./\f\3\2\2/\60\7\f\2\2\60\62")
        buf.write("\5\6\4\4\61\37\3\2\2\2\61\"\3\2\2\2\61%\3\2\2\2\61(\3")
        buf.write("\2\2\2\61+\3\2\2\2\61.\3\2\2\2\62\65\3\2\2\2\63\61\3\2")
        buf.write("\2\2\63\64\3\2\2\2\64\7\3\2\2\2\65\63\3\2\2\2\66;\5\n")
        buf.write("\6\2\678\7\f\2\28:\5\n\6\29\67\3\2\2\2:=\3\2\2\2;9\3\2")
        buf.write("\2\2;<\3\2\2\2<\t\3\2\2\2=;\3\2\2\2>C\5\f\7\2?@\7\13\2")
        buf.write("\2@B\5\f\7\2A?\3\2\2\2BE\3\2\2\2CA\3\2\2\2CD\3\2\2\2D")
        buf.write("\13\3\2\2\2EC\3\2\2\2FK\5\16\b\2GH\t\4\2\2HJ\5\16\b\2")
        buf.write("IG\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\r\3\2\2\2MK")
        buf.write("\3\2\2\2NS\5\20\t\2OP\t\3\2\2PR\5\20\t\2QO\3\2\2\2RU\3")
        buf.write("\2\2\2SQ\3\2\2\2ST\3\2\2\2T\17\3\2\2\2US\3\2\2\2V[\5\22")
        buf.write("\n\2WX\t\2\2\2XZ\5\22\n\2YW\3\2\2\2Z]\3\2\2\2[Y\3\2\2")
        buf.write("\2[\\\3\2\2\2\\\21\3\2\2\2][\3\2\2\2^c\5\24\13\2_`\7\3")
        buf.write("\2\2`b\5\24\13\2a_\3\2\2\2be\3\2\2\2ca\3\2\2\2cd\3\2\2")
        buf.write("\2d\23\3\2\2\2ec\3\2\2\2fg\t\5\2\2g\25\3\2\2\2\n\61\63")
        buf.write(";CKS[c")
        return buf.getvalue()


class LeftRecursionGrammarParser ( Parser ):

    grammarFileName = "LeftRecursionGrammar.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'",
                     "'=='", "'!='", "'&&'", "'||'", "'?'", "':'" ]

    symbolicNames = [ "<INVALID>", "CARET", "STAR", "SLASH", "PERCENT",
                      "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", "LOGICAL_AND",
                      "LOGICAL_OR", "QUESTION", "COLON", "ID", "DIGIT",
                      "WS" ]

    RULE_leftRecExprRoot = 0
    RULE_notLeftRecExprRoot = 1
    RULE_leftRecExpr = 2
    RULE_notLeftRecExpr = 3
    RULE_logicalAndExpr = 4
    RULE_equalExpr = 5
    RULE_addExpr = 6
    RULE_multExpr = 7
    RULE_powerExpr = 8
    RULE_atom = 9

    ruleNames =  [ "leftRecExprRoot", "notLeftRecExprRoot", "leftRecExpr",
                   "notLeftRecExpr", "logicalAndExpr", "equalExpr", "addExpr",
                   "multExpr", "powerExpr", "atom" ]

    EOF = Token.EOF
    CARET=1
    STAR=2
    SLASH=3
    PERCENT=4
    PLUS=5
    MINUS=6
    EQUAL=7
    NOT_EQUAL=8
    LOGICAL_AND=9
    LOGICAL_OR=10
    QUESTION=11
    COLON=12
    ID=13
    DIGIT=14
    WS=15

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.8")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class LeftRecExprRootContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def leftRecExpr(self):
            return self.getTypedRuleContext(LeftRecursionGrammarParser.LeftRecExprContext,0)


        def EOF(self):
            return self.getToken(LeftRecursionGrammarParser.EOF, 0)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_leftRecExprRoot




    def leftRecExprRoot(self):

        localctx = LeftRecursionGrammarParser.LeftRecExprRootContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_leftRecExprRoot)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 20
            self.leftRecExpr(0)
            self.state = 21
            self.match(LeftRecursionGrammarParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class NotLeftRecExprRootContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def notLeftRecExpr(self):
            return self.getTypedRuleContext(LeftRecursionGrammarParser.NotLeftRecExprContext,0)


        def EOF(self):
            return self.getToken(LeftRecursionGrammarParser.EOF, 0)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_notLeftRecExprRoot




    def notLeftRecExprRoot(self):

        localctx = LeftRecursionGrammarParser.NotLeftRecExprRootContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_notLeftRecExprRoot)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 23
            self.notLeftRecExpr()
            self.state = 24
            self.match(LeftRecursionGrammarParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class LeftRecExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def atom(self):
            return self.getTypedRuleContext(LeftRecursionGrammarParser.AtomContext,0)


        def leftRecExpr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.LeftRecExprContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.LeftRecExprContext,i)


        def CARET(self):
            return self.getToken(LeftRecursionGrammarParser.CARET, 0)

        def STAR(self):
            return self.getToken(LeftRecursionGrammarParser.STAR, 0)

        def SLASH(self):
            return self.getToken(LeftRecursionGrammarParser.SLASH, 0)

        def PERCENT(self):
            return self.getToken(LeftRecursionGrammarParser.PERCENT, 0)

        def PLUS(self):
            return self.getToken(LeftRecursionGrammarParser.PLUS, 0)

        def MINUS(self):
            return self.getToken(LeftRecursionGrammarParser.MINUS, 0)

        def EQUAL(self):
            return self.getToken(LeftRecursionGrammarParser.EQUAL, 0)

        def NOT_EQUAL(self):
            return self.getToken(LeftRecursionGrammarParser.NOT_EQUAL, 0)

        def LOGICAL_AND(self):
            return self.getToken(LeftRecursionGrammarParser.LOGICAL_AND, 0)

        def LOGICAL_OR(self):
            return self.getToken(LeftRecursionGrammarParser.LOGICAL_OR, 0)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_leftRecExpr



    def leftRecExpr(self, _p:int=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 4
        self.enterRecursionRule(localctx, 4, self.RULE_leftRecExpr, _p)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 27
            self.atom()
            self._ctx.stop = self._input.LT(-1)
            self.state = 49
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,1,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    self.state = 47
                    self._errHandler.sync(self)
                    la_ = self._interp.adaptivePredict(self._input,0,self._ctx)
                    if la_ == 1:
                        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, _parentctx, _parentState)
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_leftRecExpr)
                        self.state = 29
                        if not self.precpred(self._ctx, 6):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 6)")
                        self.state = 30
                        self.match(LeftRecursionGrammarParser.CARET)
                        self.state = 31
                        self.leftRecExpr(6)
                        pass

                    elif la_ == 2:
                        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, _parentctx, _parentState)
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_leftRecExpr)
                        self.state = 32
                        if not self.precpred(self._ctx, 5):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 5)")
                        self.state = 33
                        _la = self._input.LA(1)
                        if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << LeftRecursionGrammarParser.STAR) | (1 << LeftRecursionGrammarParser.SLASH) | (1 << LeftRecursionGrammarParser.PERCENT))) != 0)):
                            self._errHandler.recoverInline(self)
                        else:
                            self._errHandler.reportMatch(self)
                            self.consume()
                        self.state = 34
                        self.leftRecExpr(6)
                        pass

                    elif la_ == 3:
                        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, _parentctx, _parentState)
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_leftRecExpr)
                        self.state = 35
                        if not self.precpred(self._ctx, 4):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 4)")
                        self.state = 36
                        _la = self._input.LA(1)
                        if not(_la==LeftRecursionGrammarParser.PLUS or _la==LeftRecursionGrammarParser.MINUS):
                            self._errHandler.recoverInline(self)
                        else:
                            self._errHandler.reportMatch(self)
                            self.consume()
                        self.state = 37
                        self.leftRecExpr(5)
                        pass

                    elif la_ == 4:
                        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, _parentctx, _parentState)
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_leftRecExpr)
                        self.state = 38
                        if not self.precpred(self._ctx, 3):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 3)")
                        self.state = 39
                        _la = self._input.LA(1)
                        if not(_la==LeftRecursionGrammarParser.EQUAL or _la==LeftRecursionGrammarParser.NOT_EQUAL):
                            self._errHandler.recoverInline(self)
                        else:
                            self._errHandler.reportMatch(self)
                            self.consume()
                        self.state = 40
                        self.leftRecExpr(4)
                        pass

                    elif la_ == 5:
                        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, _parentctx, _parentState)
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_leftRecExpr)
                        self.state = 41
                        if not self.precpred(self._ctx, 2):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 2)")
                        self.state = 42
                        self.match(LeftRecursionGrammarParser.LOGICAL_AND)
                        self.state = 43
                        self.leftRecExpr(3)
                        pass

                    elif la_ == 6:
                        localctx = LeftRecursionGrammarParser.LeftRecExprContext(self, _parentctx, _parentState)
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_leftRecExpr)
                        self.state = 44
                        if not self.precpred(self._ctx, 1):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 1)")
                        self.state = 45
                        self.match(LeftRecursionGrammarParser.LOGICAL_OR)
                        self.state = 46
                        self.leftRecExpr(2)
                        pass


                self.state = 51
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,1,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx


    class NotLeftRecExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def logicalAndExpr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.LogicalAndExprContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.LogicalAndExprContext,i)


        def LOGICAL_OR(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.LOGICAL_OR)
            else:
                return self.getToken(LeftRecursionGrammarParser.LOGICAL_OR, i)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_notLeftRecExpr




    def notLeftRecExpr(self):

        localctx = LeftRecursionGrammarParser.NotLeftRecExprContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_notLeftRecExpr)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 52
            self.logicalAndExpr()
            self.state = 57
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==LeftRecursionGrammarParser.LOGICAL_OR:
                self.state = 53
                self.match(LeftRecursionGrammarParser.LOGICAL_OR)
                self.state = 54
                self.logicalAndExpr()
                self.state = 59
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class LogicalAndExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def equalExpr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.EqualExprContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.EqualExprContext,i)


        def LOGICAL_AND(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.LOGICAL_AND)
            else:
                return self.getToken(LeftRecursionGrammarParser.LOGICAL_AND, i)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_logicalAndExpr




    def logicalAndExpr(self):

        localctx = LeftRecursionGrammarParser.LogicalAndExprContext(self, self._ctx, self.state)
        self.enterRule(localctx, 8, self.RULE_logicalAndExpr)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 60
            self.equalExpr()
            self.state = 65
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==LeftRecursionGrammarParser.LOGICAL_AND:
                self.state = 61
                self.match(LeftRecursionGrammarParser.LOGICAL_AND)
                self.state = 62
                self.equalExpr()
                self.state = 67
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class EqualExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def addExpr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.AddExprContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.AddExprContext,i)


        def EQUAL(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.EQUAL)
            else:
                return self.getToken(LeftRecursionGrammarParser.EQUAL, i)

        def NOT_EQUAL(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.NOT_EQUAL)
            else:
                return self.getToken(LeftRecursionGrammarParser.NOT_EQUAL, i)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_equalExpr




    def equalExpr(self):

        localctx = LeftRecursionGrammarParser.EqualExprContext(self, self._ctx, self.state)
        self.enterRule(localctx, 10, self.RULE_equalExpr)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 68
            self.addExpr()
            self.state = 73
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==LeftRecursionGrammarParser.EQUAL or _la==LeftRecursionGrammarParser.NOT_EQUAL:
                self.state = 69
                _la = self._input.LA(1)
                if not(_la==LeftRecursionGrammarParser.EQUAL or _la==LeftRecursionGrammarParser.NOT_EQUAL):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 70
                self.addExpr()
                self.state = 75
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AddExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def multExpr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.MultExprContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.MultExprContext,i)


        def PLUS(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.PLUS)
            else:
                return self.getToken(LeftRecursionGrammarParser.PLUS, i)

        def MINUS(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.MINUS)
            else:
                return self.getToken(LeftRecursionGrammarParser.MINUS, i)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_addExpr




    def addExpr(self):

        localctx = LeftRecursionGrammarParser.AddExprContext(self, self._ctx, self.state)
        self.enterRule(localctx, 12, self.RULE_addExpr)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 76
            self.multExpr()
            self.state = 81
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==LeftRecursionGrammarParser.PLUS or _la==LeftRecursionGrammarParser.MINUS:
                self.state = 77
                _la = self._input.LA(1)
                if not(_la==LeftRecursionGrammarParser.PLUS or _la==LeftRecursionGrammarParser.MINUS):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 78
                self.multExpr()
                self.state = 83
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class MultExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def powerExpr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.PowerExprContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.PowerExprContext,i)


        def STAR(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.STAR)
            else:
                return self.getToken(LeftRecursionGrammarParser.STAR, i)

        def SLASH(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.SLASH)
            else:
                return self.getToken(LeftRecursionGrammarParser.SLASH, i)

        def PERCENT(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.PERCENT)
            else:
                return self.getToken(LeftRecursionGrammarParser.PERCENT, i)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_multExpr




    def multExpr(self):

        localctx = LeftRecursionGrammarParser.MultExprContext(self, self._ctx, self.state)
        self.enterRule(localctx, 14, self.RULE_multExpr)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 84
            self.powerExpr()
            self.state = 89
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while (((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << LeftRecursionGrammarParser.STAR) | (1 << LeftRecursionGrammarParser.SLASH) | (1 << LeftRecursionGrammarParser.PERCENT))) != 0):
                self.state = 85
                _la = self._input.LA(1)
                if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << LeftRecursionGrammarParser.STAR) | (1 << LeftRecursionGrammarParser.SLASH) | (1 << LeftRecursionGrammarParser.PERCENT))) != 0)):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 86
                self.powerExpr()
                self.state = 91
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PowerExprContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def atom(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(LeftRecursionGrammarParser.AtomContext)
            else:
                return self.getTypedRuleContext(LeftRecursionGrammarParser.AtomContext,i)


        def CARET(self, i:int=None):
            if i is None:
                return self.getTokens(LeftRecursionGrammarParser.CARET)
            else:
                return self.getToken(LeftRecursionGrammarParser.CARET, i)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_powerExpr




    def powerExpr(self):

        localctx = LeftRecursionGrammarParser.PowerExprContext(self, self._ctx, self.state)
        self.enterRule(localctx, 16, self.RULE_powerExpr)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 92
            self.atom()
            self.state = 97
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==LeftRecursionGrammarParser.CARET:
                self.state = 93
                self.match(LeftRecursionGrammarParser.CARET)
                self.state = 94
                self.atom()
                self.state = 99
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AtomContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ID(self):
            return self.getToken(LeftRecursionGrammarParser.ID, 0)

        def DIGIT(self):
            return self.getToken(LeftRecursionGrammarParser.DIGIT, 0)

        def getRuleIndex(self):
            return LeftRecursionGrammarParser.RULE_atom




    def atom(self):

        localctx = LeftRecursionGrammarParser.AtomContext(self, self._ctx, self.state)
        self.enterRule(localctx, 18, self.RULE_atom)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 100
            _la = self._input.LA(1)
            if not(_la==LeftRecursionGrammarParser.ID or _la==LeftRecursionGrammarParser.DIGIT):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx



    def sempred(self, localctx:RuleContext, ruleIndex:int, predIndex:int):
        if self._predicates == None:
            self._predicates = dict()
        self._predicates[2] = self.leftRecExpr_sempred
        pred = self._predicates.get(ruleIndex, None)
        if pred is None:
            raise Exception("No predicate with index:" + str(ruleIndex))
        else:
            return pred(localctx, predIndex)

    def leftRecExpr_sempred(self, localctx:LeftRecExprContext, predIndex:int):
            if predIndex == 0:
                return self.precpred(self._ctx, 6)


            if predIndex == 1:
                return self.precpred(self._ctx, 5)


            if predIndex == 2:
                return self.precpred(self._ctx, 4)


            if predIndex == 3:
                return self.precpred(self._ctx, 3)


            if predIndex == 4:
                return self.precpred(self._ctx, 2)


            if predIndex == 5:
                return self.precpred(self._ctx, 1)





