# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO

def serializedATN():
    return [
        4,1,65,15,2,0,7,0,2,1,7,1,1,0,4,0,6,8,0,11,0,12,0,7,1,0,1,0,1,0,
        1,1,1,1,1,1,0,0,2,0,2,0,1,1,0,1,64,13,0,5,1,0,0,0,2,12,1,0,0,0,4,
        6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,9,1,
        0,0,0,9,10,5,0,0,1,10,11,6,0,-1,0,11,1,1,0,0,0,12,13,7,0,0,0,13,
        3,1,0,0,0,1,7
    ]

class PParser ( Parser ):

    grammarFileName = "P.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'T0'", "'T1'", "'T2'", "'T3'", "'T4'",
                     "'T5'", "'T6'", "'T7'", "'T8'", "'T9'", "'T10'", "'T11'",
                     "'T12'", "'T13'", "'T14'", "'T15'", "'T16'", "'T17'",
                     "'T18'", "'T19'", "'T20'", "'T21'", "'T22'", "'T23'",
                     "'T24'", "'T25'", "'T26'", "'T27'", "'T28'", "'T29'",
                     "'T30'", "'T31'", "'T32'", "'T33'", "'T34'", "'T35'",
                     "'T36'", "'T37'", "'T38'", "'T39'", "'T40'", "'T41'",
                     "'T42'", "'T43'", "'T44'", "'T45'", "'T46'", "'T47'",
                     "'T48'", "'T49'", "'T50'", "'T51'", "'T52'", "'T53'",
                     "'T54'", "'T55'", "'T56'", "'T57'", "'T58'", "'T59'",
                     "'T60'", "'T61'", "'T62'", "'T63'" ]

    symbolicNames = [ "<INVALID>", "T0", "T1", "T2", "T3", "T4", "T5", "T6",
                      "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14",
                      "T15", "T16", "T17", "T18", "T19", "T20", "T21", "T22",
                      "T23", "T24", "T25", "T26", "T27", "T28", "T29", "T30",
                      "T31", "T32", "T33", "T34", "T35", "T36", "T37", "T38",
                      "T39", "T40", "T41", "T42", "T43", "T44", "T45", "T46",
                      "T47", "T48", "T49", "T50", "T51", "T52", "T53", "T54",
                      "T55", "T56", "T57", "T58", "T59", "T60", "T61", "T62",
                      "T63", "WS" ]

    RULE_r = 0
    RULE_t = 1

    ruleNames =  [ "r", "t" ]

    EOF = Token.EOF
    T0=1
    T1=2
    T2=3
    T3=4
    T4=5
    T5=6
    T6=7
    T7=8
    T8=9
    T9=10
    T10=11
    T11=12
    T12=13
    T13=14
    T14=15
    T15=16
    T16=17
    T17=18
    T18=19
    T19=20
    T20=21
    T21=22
    T22=23
    T23=24
    T24=25
    T25=26
    T26=27
    T27=28
    T28=29
    T29=30
    T30=31
    T31=32
    T32=33
    T33=34
    T34=35
    T35=36
    T36=37
    T37=38
    T38=39
    T39=40
    T40=41
    T41=42
    T42=43
    T43=44
    T44=45
    T45=46
    T46=47
    T47=48
    T48=49
    T49=50
    T50=51
    T51=52
    T52=53
    T53=54
    T54=55
    T55=56
    T56=57
    T57=58
    T58=59
    T59=60
    T60=61
    T61=62
    T62=63
    T63=64
    WS=65

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.10.1")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class RContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def EOF(self):
            return self.getToken(PParser.EOF, 0)

        def t(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(PParser.TContext)
            else:
                return self.getTypedRuleContext(PParser.TContext,i)


        def getRuleIndex(self):
            return PParser.RULE_r

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterR" ):
                listener.enterR(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitR" ):
                listener.exitR(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitR" ):
                return visitor.visitR(self)
            else:
                return visitor.visitChildren(self)




    def r(self):

        localctx = PParser.RContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_r)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 5
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while True:
                self.state = 4
                self.t()
                self.state = 7
                self._errHandler.sync(self)
                _la = self._input.LA(1)
                if not (((((_la - 1)) & ~0x3f) == 0 and ((1 << (_la - 1)) & ((1 << (PParser.T0 - 1)) | (1 << (PParser.T1 - 1)) | (1 << (PParser.T2 - 1)) | (1 << (PParser.T3 - 1)) | (1 << (PParser.T4 - 1)) | (1 << (PParser.T5 - 1)) | (1 << (PParser.T6 - 1)) | (1 << (PParser.T7 - 1)) | (1 << (PParser.T8 - 1)) | (1 << (PParser.T9 - 1)) | (1 << (PParser.T10 - 1)) | (1 << (PParser.T11 - 1)) | (1 << (PParser.T12 - 1)) | (1 << (PParser.T13 - 1)) | (1 << (PParser.T14 - 1)) | (1 << (PParser.T15 - 1)) | (1 << (PParser.T16 - 1)) | (1 << (PParser.T17 - 1)) | (1 << (PParser.T18 - 1)) | (1 << (PParser.T19 - 1)) | (1 << (PParser.T20 - 1)) | (1 << (PParser.T21 - 1)) | (1 << (PParser.T22 - 1)) | (1 << (PParser.T23 - 1)) | (1 << (PParser.T24 - 1)) | (1 << (PParser.T25 - 1)) | (1 << (PParser.T26 - 1)) | (1 << (PParser.T27 - 1)) | (1 << (PParser.T28 - 1)) | (1 << (PParser.T29 - 1)) | (1 << (PParser.T30 - 1)) | (1 << (PParser.T31 - 1)) | (1 << (PParser.T32 - 1)) | (1 << (PParser.T33 - 1)) | (1 << (PParser.T34 - 1)) | (1 << (PParser.T35 - 1)) | (1 << (PParser.T36 - 1)) | (1 << (PParser.T37 - 1)) | (1 << (PParser.T38 - 1)) | (1 << (PParser.T39 - 1)) | (1 << (PParser.T40 - 1)) | (1 << (PParser.T41 - 1)) | (1 << (PParser.T42 - 1)) | (1 << (PParser.T43 - 1)) | (1 << (PParser.T44 - 1)) | (1 << (PParser.T45 - 1)) | (1 << (PParser.T46 - 1)) | (1 << (PParser.T47 - 1)) | (1 << (PParser.T48 - 1)) | (1 << (PParser.T49 - 1)) | (1 << (PParser.T50 - 1)) | (1 << (PParser.T51 - 1)) | (1 << (PParser.T52 - 1)) | (1 << (PParser.T53 - 1)) | (1 << (PParser.T54 - 1)) | (1 << (PParser.T55 - 1)) | (1 << (PParser.T56 - 1)) | (1 << (PParser.T57 - 1)) | (1 << (PParser.T58 - 1)) | (1 << (PParser.T59 - 1)) | (1 << (PParser.T60 - 1)) | (1 << (PParser.T61 - 1)) | (1 << (PParser.T62 - 1)) | (1 << (PParser.T63 - 1)))) != 0)):
                    break

            self.state = 9
            self.match(PParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class TContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def T0(self):
            return self.getToken(PParser.T0, 0)

        def T1(self):
            return self.getToken(PParser.T1, 0)

        def T2(self):
            return self.getToken(PParser.T2, 0)

        def T3(self):
            return self.getToken(PParser.T3, 0)

        def T4(self):
            return self.getToken(PParser.T4, 0)

        def T5(self):
            return self.getToken(PParser.T5, 0)

        def T6(self):
            return self.getToken(PParser.T6, 0)

        def T7(self):
            return self.getToken(PParser.T7, 0)

        def T8(self):
            return self.getToken(PParser.T8, 0)

        def T9(self):
            return self.getToken(PParser.T9, 0)

        def T10(self):
            return self.getToken(PParser.T10, 0)

        def T11(self):
            return self.getToken(PParser.T11, 0)

        def T12(self):
            return self.getToken(PParser.T12, 0)

        def T13(self):
            return self.getToken(PParser.T13, 0)

        def T14(self):
            return self.getToken(PParser.T14, 0)

        def T15(self):
            return self.getToken(PParser.T15, 0)

        def T16(self):
            return self.getToken(PParser.T16, 0)

        def T17(self):
            return self.getToken(PParser.T17, 0)

        def T18(self):
            return self.getToken(PParser.T18, 0)

        def T19(self):
            return self.getToken(PParser.T19, 0)

        def T20(self):
            return self.getToken(PParser.T20, 0)

        def T21(self):
            return self.getToken(PParser.T21, 0)

        def T22(self):
            return self.getToken(PParser.T22, 0)

        def T23(self):
            return self.getToken(PParser.T23, 0)

        def T24(self):
            return self.getToken(PParser.T24, 0)

        def T25(self):
            return self.getToken(PParser.T25, 0)

        def T26(self):
            return self.getToken(PParser.T26, 0)

        def T27(self):
            return self.getToken(PParser.T27, 0)

        def T28(self):
            return self.getToken(PParser.T28, 0)

        def T29(self):
            return self.getToken(PParser.T29, 0)

        def T30(self):
            return self.getToken(PParser.T30, 0)

        def T31(self):
            return self.getToken(PParser.T31, 0)

        def T32(self):
            return self.getToken(PParser.T32, 0)

        def T33(self):
            return self.getToken(PParser.T33, 0)

        def T34(self):
            return self.getToken(PParser.T34, 0)

        def T35(self):
            return self.getToken(PParser.T35, 0)

        def T36(self):
            return self.getToken(PParser.T36, 0)

        def T37(self):
            return self.getToken(PParser.T37, 0)

        def T38(self):
            return self.getToken(PParser.T38, 0)

        def T39(self):
            return self.getToken(PParser.T39, 0)

        def T40(self):
            return self.getToken(PParser.T40, 0)

        def T41(self):
            return self.getToken(PParser.T41, 0)

        def T42(self):
            return self.getToken(PParser.T42, 0)

        def T43(self):
            return self.getToken(PParser.T43, 0)

        def T44(self):
            return self.getToken(PParser.T44, 0)

        def T45(self):
            return self.getToken(PParser.T45, 0)

        def T46(self):
            return self.getToken(PParser.T46, 0)

        def T47(self):
            return self.getToken(PParser.T47, 0)

        def T48(self):
            return self.getToken(PParser.T48, 0)

        def T49(self):
            return self.getToken(PParser.T49, 0)

        def T50(self):
            return self.getToken(PParser.T50, 0)

        def T51(self):
            return self.getToken(PParser.T51, 0)

        def T52(self):
            return self.getToken(PParser.T52, 0)

        def T53(self):
            return self.getToken(PParser.T53, 0)

        def T54(self):
            return self.getToken(PParser.T54, 0)

        def T55(self):
            return self.getToken(PParser.T55, 0)

        def T56(self):
            return self.getToken(PParser.T56, 0)

        def T57(self):
            return self.getToken(PParser.T57, 0)

        def T58(self):
            return self.getToken(PParser.T58, 0)

        def T59(self):
            return self.getToken(PParser.T59, 0)

        def T60(self):
            return self.getToken(PParser.T60, 0)

        def T61(self):
            return self.getToken(PParser.T61, 0)

        def T62(self):
            return self.getToken(PParser.T62, 0)

        def T63(self):
            return self.getToken(PParser.T63, 0)

        def getRuleIndex(self):
            return PParser.RULE_t

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterT" ):
                listener.enterT(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitT" ):
                listener.exitT(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitT" ):
                return visitor.visitT(self)
            else:
                return visitor.visitChildren(self)




    def t(self):

        localctx = PParser.TContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_t)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 12
            _la = self._input.LA(1)
            if not(((((_la - 1)) & ~0x3f) == 0 and ((1 << (_la - 1)) & ((1 << (PParser.T0 - 1)) | (1 << (PParser.T1 - 1)) | (1 << (PParser.T2 - 1)) | (1 << (PParser.T3 - 1)) | (1 << (PParser.T4 - 1)) | (1 << (PParser.T5 - 1)) | (1 << (PParser.T6 - 1)) | (1 << (PParser.T7 - 1)) | (1 << (PParser.T8 - 1)) | (1 << (PParser.T9 - 1)) | (1 << (PParser.T10 - 1)) | (1 << (PParser.T11 - 1)) | (1 << (PParser.T12 - 1)) | (1 << (PParser.T13 - 1)) | (1 << (PParser.T14 - 1)) | (1 << (PParser.T15 - 1)) | (1 << (PParser.T16 - 1)) | (1 << (PParser.T17 - 1)) | (1 << (PParser.T18 - 1)) | (1 << (PParser.T19 - 1)) | (1 << (PParser.T20 - 1)) | (1 << (PParser.T21 - 1)) | (1 << (PParser.T22 - 1)) | (1 << (PParser.T23 - 1)) | (1 << (PParser.T24 - 1)) | (1 << (PParser.T25 - 1)) | (1 << (PParser.T26 - 1)) | (1 << (PParser.T27 - 1)) | (1 << (PParser.T28 - 1)) | (1 << (PParser.T29 - 1)) | (1 << (PParser.T30 - 1)) | (1 << (PParser.T31 - 1)) | (1 << (PParser.T32 - 1)) | (1 << (PParser.T33 - 1)) | (1 << (PParser.T34 - 1)) | (1 << (PParser.T35 - 1)) | (1 << (PParser.T36 - 1)) | (1 << (PParser.T37 - 1)) | (1 << (PParser.T38 - 1)) | (1 << (PParser.T39 - 1)) | (1 << (PParser.T40 - 1)) | (1 << (PParser.T41 - 1)) | (1 << (PParser.T42 - 1)) | (1 << (PParser.T43 - 1)) | (1 << (PParser.T44 - 1)) | (1 << (PParser.T45 - 1)) | (1 << (PParser.T46 - 1)) | (1 << (PParser.T47 - 1)) | (1 << (PParser.T48 - 1)) | (1 << (PParser.T49 - 1)) | (1 << (PParser.T50 - 1)) | (1 << (PParser.T51 - 1)) | (1 << (PParser.T52 - 1)) | (1 << (PParser.T53 - 1)) | (1 << (PParser.T54 - 1)) | (1 << (PParser.T55 - 1)) | (1 << (PParser.T56 - 1)) | (1 << (PParser.T57 - 1)) | (1 << (PParser.T58 - 1)) | (1 << (PParser.T59 - 1)) | (1 << (PParser.T60 - 1)) | (1 << (PParser.T61 - 1)) | (1 << (PParser.T62 - 1)) | (1 << (PParser.T63 - 1)))) != 0)):
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





