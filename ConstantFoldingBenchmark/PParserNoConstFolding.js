// jshint ignore: start
import antlr4 from 'antlr4';
import PListener from './PListener.js';
import PVisitor from './PVisitor.js';

const serializedATN = [4,1,65,15,2,0,7,0,2,1,7,1,1,0,4,0,6,8,0,11,0,12,0,
7,1,0,1,0,1,0,1,1,1,1,1,1,0,0,2,0,2,0,1,1,0,1,64,13,0,5,1,0,0,0,2,12,1,0,
0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,9,1,0,
0,0,9,10,5,0,0,1,10,11,6,0,-1,0,11,1,1,0,0,0,12,13,7,0,0,0,13,3,1,0,0,0,
1,7];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PParser extends antlr4.Parser {

    static grammarFileName = "P.g4";
    static literalNames = [ null, "'T0'", "'T1'", "'T2'", "'T3'", "'T4'",
                            "'T5'", "'T6'", "'T7'", "'T8'", "'T9'", "'T10'",
                            "'T11'", "'T12'", "'T13'", "'T14'", "'T15'",
                            "'T16'", "'T17'", "'T18'", "'T19'", "'T20'",
                            "'T21'", "'T22'", "'T23'", "'T24'", "'T25'",
                            "'T26'", "'T27'", "'T28'", "'T29'", "'T30'",
                            "'T31'", "'T32'", "'T33'", "'T34'", "'T35'",
                            "'T36'", "'T37'", "'T38'", "'T39'", "'T40'",
                            "'T41'", "'T42'", "'T43'", "'T44'", "'T45'",
                            "'T46'", "'T47'", "'T48'", "'T49'", "'T50'",
                            "'T51'", "'T52'", "'T53'", "'T54'", "'T55'",
                            "'T56'", "'T57'", "'T58'", "'T59'", "'T60'",
                            "'T61'", "'T62'", "'T63'" ];
    static symbolicNames = [ null, "T0", "T1", "T2", "T3", "T4", "T5", "T6",
                             "T7", "T8", "T9", "T10", "T11", "T12", "T13",
                             "T14", "T15", "T16", "T17", "T18", "T19", "T20",
                             "T21", "T22", "T23", "T24", "T25", "T26", "T27",
                             "T28", "T29", "T30", "T31", "T32", "T33", "T34",
                             "T35", "T36", "T37", "T38", "T39", "T40", "T41",
                             "T42", "T43", "T44", "T45", "T46", "T47", "T48",
                             "T49", "T50", "T51", "T52", "T53", "T54", "T55",
                             "T56", "T57", "T58", "T59", "T60", "T61", "T62",
                             "T63", "WS" ];
    static ruleNames = [ "r", "t" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PParser.ruleNames;
        this.literalNames = PParser.literalNames;
        this.symbolicNames = PParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	r() {
	    let localctx = new RContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PParser.RULE_r);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 5;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 4;
	            this.t();
	            this.state = 7;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (PParser.T0 - 1)) | (1 << (PParser.T1 - 1)) | (1 << (PParser.T2 - 1)) | (1 << (PParser.T3 - 1)) | (1 << (PParser.T4 - 1)) | (1 << (PParser.T5 - 1)) | (1 << (PParser.T6 - 1)) | (1 << (PParser.T7 - 1)) | (1 << (PParser.T8 - 1)) | (1 << (PParser.T9 - 1)) | (1 << (PParser.T10 - 1)) | (1 << (PParser.T11 - 1)) | (1 << (PParser.T12 - 1)) | (1 << (PParser.T13 - 1)) | (1 << (PParser.T14 - 1)) | (1 << (PParser.T15 - 1)) | (1 << (PParser.T16 - 1)) | (1 << (PParser.T17 - 1)) | (1 << (PParser.T18 - 1)) | (1 << (PParser.T19 - 1)) | (1 << (PParser.T20 - 1)) | (1 << (PParser.T21 - 1)) | (1 << (PParser.T22 - 1)) | (1 << (PParser.T23 - 1)) | (1 << (PParser.T24 - 1)) | (1 << (PParser.T25 - 1)) | (1 << (PParser.T26 - 1)) | (1 << (PParser.T27 - 1)) | (1 << (PParser.T28 - 1)) | (1 << (PParser.T29 - 1)) | (1 << (PParser.T30 - 1)) | (1 << (PParser.T31 - 1)))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (PParser.T32 - 33)) | (1 << (PParser.T33 - 33)) | (1 << (PParser.T34 - 33)) | (1 << (PParser.T35 - 33)) | (1 << (PParser.T36 - 33)) | (1 << (PParser.T37 - 33)) | (1 << (PParser.T38 - 33)) | (1 << (PParser.T39 - 33)) | (1 << (PParser.T40 - 33)) | (1 << (PParser.T41 - 33)) | (1 << (PParser.T42 - 33)) | (1 << (PParser.T43 - 33)) | (1 << (PParser.T44 - 33)) | (1 << (PParser.T45 - 33)) | (1 << (PParser.T46 - 33)) | (1 << (PParser.T47 - 33)) | (1 << (PParser.T48 - 33)) | (1 << (PParser.T49 - 33)) | (1 << (PParser.T50 - 33)) | (1 << (PParser.T51 - 33)) | (1 << (PParser.T52 - 33)) | (1 << (PParser.T53 - 33)) | (1 << (PParser.T54 - 33)) | (1 << (PParser.T55 - 33)) | (1 << (PParser.T56 - 33)) | (1 << (PParser.T57 - 33)) | (1 << (PParser.T58 - 33)) | (1 << (PParser.T59 - 33)) | (1 << (PParser.T60 - 33)) | (1 << (PParser.T61 - 33)) | (1 << (PParser.T62 - 33)) | (1 << (PParser.T63 - 33)))) !== 0));
	        this.state = 9;
	        this.match(PParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	t() {
	    let localctx = new TContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PParser.RULE_t);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        _la = this._input.LA(1);
	        if(!(((((_la - 1)) & ~0x1f) == 0 && ((1 << (_la - 1)) & ((1 << (PParser.T0 - 1)) | (1 << (PParser.T1 - 1)) | (1 << (PParser.T2 - 1)) | (1 << (PParser.T3 - 1)) | (1 << (PParser.T4 - 1)) | (1 << (PParser.T5 - 1)) | (1 << (PParser.T6 - 1)) | (1 << (PParser.T7 - 1)) | (1 << (PParser.T8 - 1)) | (1 << (PParser.T9 - 1)) | (1 << (PParser.T10 - 1)) | (1 << (PParser.T11 - 1)) | (1 << (PParser.T12 - 1)) | (1 << (PParser.T13 - 1)) | (1 << (PParser.T14 - 1)) | (1 << (PParser.T15 - 1)) | (1 << (PParser.T16 - 1)) | (1 << (PParser.T17 - 1)) | (1 << (PParser.T18 - 1)) | (1 << (PParser.T19 - 1)) | (1 << (PParser.T20 - 1)) | (1 << (PParser.T21 - 1)) | (1 << (PParser.T22 - 1)) | (1 << (PParser.T23 - 1)) | (1 << (PParser.T24 - 1)) | (1 << (PParser.T25 - 1)) | (1 << (PParser.T26 - 1)) | (1 << (PParser.T27 - 1)) | (1 << (PParser.T28 - 1)) | (1 << (PParser.T29 - 1)) | (1 << (PParser.T30 - 1)) | (1 << (PParser.T31 - 1)))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (PParser.T32 - 33)) | (1 << (PParser.T33 - 33)) | (1 << (PParser.T34 - 33)) | (1 << (PParser.T35 - 33)) | (1 << (PParser.T36 - 33)) | (1 << (PParser.T37 - 33)) | (1 << (PParser.T38 - 33)) | (1 << (PParser.T39 - 33)) | (1 << (PParser.T40 - 33)) | (1 << (PParser.T41 - 33)) | (1 << (PParser.T42 - 33)) | (1 << (PParser.T43 - 33)) | (1 << (PParser.T44 - 33)) | (1 << (PParser.T45 - 33)) | (1 << (PParser.T46 - 33)) | (1 << (PParser.T47 - 33)) | (1 << (PParser.T48 - 33)) | (1 << (PParser.T49 - 33)) | (1 << (PParser.T50 - 33)) | (1 << (PParser.T51 - 33)) | (1 << (PParser.T52 - 33)) | (1 << (PParser.T53 - 33)) | (1 << (PParser.T54 - 33)) | (1 << (PParser.T55 - 33)) | (1 << (PParser.T56 - 33)) | (1 << (PParser.T57 - 33)) | (1 << (PParser.T58 - 33)) | (1 << (PParser.T59 - 33)) | (1 << (PParser.T60 - 33)) | (1 << (PParser.T61 - 33)) | (1 << (PParser.T62 - 33)) | (1 << (PParser.T63 - 33)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PParser.EOF = antlr4.Token.EOF;
PParser.T0 = 1;
PParser.T1 = 2;
PParser.T2 = 3;
PParser.T3 = 4;
PParser.T4 = 5;
PParser.T5 = 6;
PParser.T6 = 7;
PParser.T7 = 8;
PParser.T8 = 9;
PParser.T9 = 10;
PParser.T10 = 11;
PParser.T11 = 12;
PParser.T12 = 13;
PParser.T13 = 14;
PParser.T14 = 15;
PParser.T15 = 16;
PParser.T16 = 17;
PParser.T17 = 18;
PParser.T18 = 19;
PParser.T19 = 20;
PParser.T20 = 21;
PParser.T21 = 22;
PParser.T22 = 23;
PParser.T23 = 24;
PParser.T24 = 25;
PParser.T25 = 26;
PParser.T26 = 27;
PParser.T27 = 28;
PParser.T28 = 29;
PParser.T29 = 30;
PParser.T30 = 31;
PParser.T31 = 32;
PParser.T32 = 33;
PParser.T33 = 34;
PParser.T34 = 35;
PParser.T35 = 36;
PParser.T36 = 37;
PParser.T37 = 38;
PParser.T38 = 39;
PParser.T39 = 40;
PParser.T40 = 41;
PParser.T41 = 42;
PParser.T42 = 43;
PParser.T43 = 44;
PParser.T44 = 45;
PParser.T45 = 46;
PParser.T46 = 47;
PParser.T47 = 48;
PParser.T48 = 49;
PParser.T49 = 50;
PParser.T50 = 51;
PParser.T51 = 52;
PParser.T52 = 53;
PParser.T53 = 54;
PParser.T54 = 55;
PParser.T55 = 56;
PParser.T56 = 57;
PParser.T57 = 58;
PParser.T58 = 59;
PParser.T59 = 60;
PParser.T60 = 61;
PParser.T61 = 62;
PParser.T62 = 63;
PParser.T63 = 64;
PParser.WS = 65;

PParser.RULE_r = 0;
PParser.RULE_t = 1;

class RContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PParser.RULE_r;
    }

	EOF() {
	    return this.getToken(PParser.EOF, 0);
	};

	t = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TContext);
	    } else {
	        return this.getTypedRuleContext(TContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PListener ) {
	        listener.enterR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PListener ) {
	        listener.exitR(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PVisitor ) {
	        return visitor.visitR(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PParser.RULE_t;
    }

	T0() {
	    return this.getToken(PParser.T0, 0);
	};

	T1() {
	    return this.getToken(PParser.T1, 0);
	};

	T2() {
	    return this.getToken(PParser.T2, 0);
	};

	T3() {
	    return this.getToken(PParser.T3, 0);
	};

	T4() {
	    return this.getToken(PParser.T4, 0);
	};

	T5() {
	    return this.getToken(PParser.T5, 0);
	};

	T6() {
	    return this.getToken(PParser.T6, 0);
	};

	T7() {
	    return this.getToken(PParser.T7, 0);
	};

	T8() {
	    return this.getToken(PParser.T8, 0);
	};

	T9() {
	    return this.getToken(PParser.T9, 0);
	};

	T10() {
	    return this.getToken(PParser.T10, 0);
	};

	T11() {
	    return this.getToken(PParser.T11, 0);
	};

	T12() {
	    return this.getToken(PParser.T12, 0);
	};

	T13() {
	    return this.getToken(PParser.T13, 0);
	};

	T14() {
	    return this.getToken(PParser.T14, 0);
	};

	T15() {
	    return this.getToken(PParser.T15, 0);
	};

	T16() {
	    return this.getToken(PParser.T16, 0);
	};

	T17() {
	    return this.getToken(PParser.T17, 0);
	};

	T18() {
	    return this.getToken(PParser.T18, 0);
	};

	T19() {
	    return this.getToken(PParser.T19, 0);
	};

	T20() {
	    return this.getToken(PParser.T20, 0);
	};

	T21() {
	    return this.getToken(PParser.T21, 0);
	};

	T22() {
	    return this.getToken(PParser.T22, 0);
	};

	T23() {
	    return this.getToken(PParser.T23, 0);
	};

	T24() {
	    return this.getToken(PParser.T24, 0);
	};

	T25() {
	    return this.getToken(PParser.T25, 0);
	};

	T26() {
	    return this.getToken(PParser.T26, 0);
	};

	T27() {
	    return this.getToken(PParser.T27, 0);
	};

	T28() {
	    return this.getToken(PParser.T28, 0);
	};

	T29() {
	    return this.getToken(PParser.T29, 0);
	};

	T30() {
	    return this.getToken(PParser.T30, 0);
	};

	T31() {
	    return this.getToken(PParser.T31, 0);
	};

	T32() {
	    return this.getToken(PParser.T32, 0);
	};

	T33() {
	    return this.getToken(PParser.T33, 0);
	};

	T34() {
	    return this.getToken(PParser.T34, 0);
	};

	T35() {
	    return this.getToken(PParser.T35, 0);
	};

	T36() {
	    return this.getToken(PParser.T36, 0);
	};

	T37() {
	    return this.getToken(PParser.T37, 0);
	};

	T38() {
	    return this.getToken(PParser.T38, 0);
	};

	T39() {
	    return this.getToken(PParser.T39, 0);
	};

	T40() {
	    return this.getToken(PParser.T40, 0);
	};

	T41() {
	    return this.getToken(PParser.T41, 0);
	};

	T42() {
	    return this.getToken(PParser.T42, 0);
	};

	T43() {
	    return this.getToken(PParser.T43, 0);
	};

	T44() {
	    return this.getToken(PParser.T44, 0);
	};

	T45() {
	    return this.getToken(PParser.T45, 0);
	};

	T46() {
	    return this.getToken(PParser.T46, 0);
	};

	T47() {
	    return this.getToken(PParser.T47, 0);
	};

	T48() {
	    return this.getToken(PParser.T48, 0);
	};

	T49() {
	    return this.getToken(PParser.T49, 0);
	};

	T50() {
	    return this.getToken(PParser.T50, 0);
	};

	T51() {
	    return this.getToken(PParser.T51, 0);
	};

	T52() {
	    return this.getToken(PParser.T52, 0);
	};

	T53() {
	    return this.getToken(PParser.T53, 0);
	};

	T54() {
	    return this.getToken(PParser.T54, 0);
	};

	T55() {
	    return this.getToken(PParser.T55, 0);
	};

	T56() {
	    return this.getToken(PParser.T56, 0);
	};

	T57() {
	    return this.getToken(PParser.T57, 0);
	};

	T58() {
	    return this.getToken(PParser.T58, 0);
	};

	T59() {
	    return this.getToken(PParser.T59, 0);
	};

	T60() {
	    return this.getToken(PParser.T60, 0);
	};

	T61() {
	    return this.getToken(PParser.T61, 0);
	};

	T62() {
	    return this.getToken(PParser.T62, 0);
	};

	T63() {
	    return this.getToken(PParser.T63, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PListener ) {
	        listener.enterT(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PListener ) {
	        listener.exitT(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PVisitor ) {
	        return visitor.visitT(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PParser.RContext = RContext;
PParser.TContext = TContext;

