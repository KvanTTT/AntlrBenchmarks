// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "LeftRecursionGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011i\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u00042\n\u0004\f\u0004\u000e\u00045\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005:\n\u0005\f\u0005\u000e",
    "\u0005=\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "B\n\u0006\f\u0006\u000e\u0006E\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007J\n\u0007\f\u0007\u000e\u0007M\u000b\u0007\u0003\b",
    "\u0003\b\u0003\b\u0007\bR\n\b\f\b\u000e\bU\u000b\b\u0003\t\u0003\t\u0003",
    "\t\u0007\tZ\n\t\f\t\u000e\t]\u000b\t\u0003\n\u0003\n\u0003\n\u0007\n",
    "b\n\n\f\n\u000e\ne\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002",
    "\u0003\u0006\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002",
    "\u0006\u0003\u0002\u0004\u0006\u0003\u0002\u0007\b\u0003\u0002\t\n\u0003",
    "\u0002\u000f\u0010\u0002j\u0002\u0016\u0003\u0002\u0002\u0002\u0004",
    "\u0019\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b",
    "6\u0003\u0002\u0002\u0002\n>\u0003\u0002\u0002\u0002\fF\u0003\u0002",
    "\u0002\u0002\u000eN\u0003\u0002\u0002\u0002\u0010V\u0003\u0002\u0002",
    "\u0002\u0012^\u0003\u0002\u0002\u0002\u0014f\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0005\u0006\u0004\u0002\u0017\u0018\u0007\u0002\u0002\u0003",
    "\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001a\u0005\b\u0005\u0002",
    "\u001a\u001b\u0007\u0002\u0002\u0003\u001b\u0005\u0003\u0002\u0002\u0002",
    "\u001c\u001d\b\u0004\u0001\u0002\u001d\u001e\u0005\u0014\u000b\u0002",
    "\u001e3\u0003\u0002\u0002\u0002\u001f \f\b\u0002\u0002 !\u0007\u0003",
    "\u0002\u0002!2\u0005\u0006\u0004\b\"#\f\u0007\u0002\u0002#$\t\u0002",
    "\u0002\u0002$2\u0005\u0006\u0004\b%&\f\u0006\u0002\u0002&\'\t\u0003",
    "\u0002\u0002\'2\u0005\u0006\u0004\u0007()\f\u0005\u0002\u0002)*\t\u0004",
    "\u0002\u0002*2\u0005\u0006\u0004\u0006+,\f\u0004\u0002\u0002,-\u0007",
    "\u000b\u0002\u0002-2\u0005\u0006\u0004\u0005./\f\u0003\u0002\u0002/",
    "0\u0007\f\u0002\u000202\u0005\u0006\u0004\u00041\u001f\u0003\u0002\u0002",
    "\u00021\"\u0003\u0002\u0002\u00021%\u0003\u0002\u0002\u00021(\u0003",
    "\u0002\u0002\u00021+\u0003\u0002\u0002\u00021.\u0003\u0002\u0002\u0002",
    "25\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u00024\u0007\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u00026;\u0005",
    "\n\u0006\u000278\u0007\f\u0002\u00028:\u0005\n\u0006\u000297\u0003\u0002",
    "\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<\t\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    ">C\u0005\f\u0007\u0002?@\u0007\u000b\u0002\u0002@B\u0005\f\u0007\u0002",
    "A?\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002",
    "\u0002CD\u0003\u0002\u0002\u0002D\u000b\u0003\u0002\u0002\u0002EC\u0003",
    "\u0002\u0002\u0002FK\u0005\u000e\b\u0002GH\t\u0004\u0002\u0002HJ\u0005",
    "\u000e\b\u0002IG\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002K",
    "I\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\r\u0003\u0002\u0002",
    "\u0002MK\u0003\u0002\u0002\u0002NS\u0005\u0010\t\u0002OP\t\u0003\u0002",
    "\u0002PR\u0005\u0010\t\u0002QO\u0003\u0002\u0002\u0002RU\u0003\u0002",
    "\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002T\u000f",
    "\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002V[\u0005\u0012\n\u0002",
    "WX\t\u0002\u0002\u0002XZ\u0005\u0012\n\u0002YW\u0003\u0002\u0002\u0002",
    "Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\\u0011\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002",
    "^c\u0005\u0014\u000b\u0002_`\u0007\u0003\u0002\u0002`b\u0005\u0014\u000b",
    "\u0002a_\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002d\u0013\u0003\u0002\u0002\u0002",
    "ec\u0003\u0002\u0002\u0002fg\t\u0005\u0002\u0002g\u0015\u0003\u0002",
    "\u0002\u0002\n13;CKS[c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'=='", 
                     "'!='", "'&&'", "'||'", "'?'", "':'" ];

var symbolicNames = [ null, "CARET", "STAR", "SLASH", "PERCENT", "PLUS", 
                      "MINUS", "EQUAL", "NOT_EQUAL", "LOGICAL_AND", "LOGICAL_OR", 
                      "QUESTION", "COLON", "ID", "DIGIT", "WS" ];

var ruleNames =  [ "leftRecExprRoot", "notLeftRecExprRoot", "leftRecExpr", 
                   "notLeftRecExpr", "logicalAndExpr", "equalExpr", "addExpr", 
                   "multExpr", "powerExpr", "atom" ];

function LeftRecursionGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LeftRecursionGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
LeftRecursionGrammarParser.prototype.constructor = LeftRecursionGrammarParser;

Object.defineProperty(LeftRecursionGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LeftRecursionGrammarParser.EOF = antlr4.Token.EOF;
LeftRecursionGrammarParser.CARET = 1;
LeftRecursionGrammarParser.STAR = 2;
LeftRecursionGrammarParser.SLASH = 3;
LeftRecursionGrammarParser.PERCENT = 4;
LeftRecursionGrammarParser.PLUS = 5;
LeftRecursionGrammarParser.MINUS = 6;
LeftRecursionGrammarParser.EQUAL = 7;
LeftRecursionGrammarParser.NOT_EQUAL = 8;
LeftRecursionGrammarParser.LOGICAL_AND = 9;
LeftRecursionGrammarParser.LOGICAL_OR = 10;
LeftRecursionGrammarParser.QUESTION = 11;
LeftRecursionGrammarParser.COLON = 12;
LeftRecursionGrammarParser.ID = 13;
LeftRecursionGrammarParser.DIGIT = 14;
LeftRecursionGrammarParser.WS = 15;

LeftRecursionGrammarParser.RULE_leftRecExprRoot = 0;
LeftRecursionGrammarParser.RULE_notLeftRecExprRoot = 1;
LeftRecursionGrammarParser.RULE_leftRecExpr = 2;
LeftRecursionGrammarParser.RULE_notLeftRecExpr = 3;
LeftRecursionGrammarParser.RULE_logicalAndExpr = 4;
LeftRecursionGrammarParser.RULE_equalExpr = 5;
LeftRecursionGrammarParser.RULE_addExpr = 6;
LeftRecursionGrammarParser.RULE_multExpr = 7;
LeftRecursionGrammarParser.RULE_powerExpr = 8;
LeftRecursionGrammarParser.RULE_atom = 9;


function LeftRecExprRootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_leftRecExprRoot;
    return this;
}

LeftRecExprRootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeftRecExprRootContext.prototype.constructor = LeftRecExprRootContext;

LeftRecExprRootContext.prototype.leftRecExpr = function() {
    return this.getTypedRuleContext(LeftRecExprContext,0);
};

LeftRecExprRootContext.prototype.EOF = function() {
    return this.getToken(LeftRecursionGrammarParser.EOF, 0);
};




LeftRecursionGrammarParser.LeftRecExprRootContext = LeftRecExprRootContext;

LeftRecursionGrammarParser.prototype.leftRecExprRoot = function() {

    var localctx = new LeftRecExprRootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LeftRecursionGrammarParser.RULE_leftRecExprRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.leftRecExpr(0);
        this.state = 21;
        this.match(LeftRecursionGrammarParser.EOF);
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
};


function NotLeftRecExprRootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_notLeftRecExprRoot;
    return this;
}

NotLeftRecExprRootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotLeftRecExprRootContext.prototype.constructor = NotLeftRecExprRootContext;

NotLeftRecExprRootContext.prototype.notLeftRecExpr = function() {
    return this.getTypedRuleContext(NotLeftRecExprContext,0);
};

NotLeftRecExprRootContext.prototype.EOF = function() {
    return this.getToken(LeftRecursionGrammarParser.EOF, 0);
};




LeftRecursionGrammarParser.NotLeftRecExprRootContext = NotLeftRecExprRootContext;

LeftRecursionGrammarParser.prototype.notLeftRecExprRoot = function() {

    var localctx = new NotLeftRecExprRootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LeftRecursionGrammarParser.RULE_notLeftRecExprRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.notLeftRecExpr();
        this.state = 24;
        this.match(LeftRecursionGrammarParser.EOF);
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
};


function LeftRecExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_leftRecExpr;
    return this;
}

LeftRecExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LeftRecExprContext.prototype.constructor = LeftRecExprContext;

LeftRecExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

LeftRecExprContext.prototype.leftRecExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LeftRecExprContext);
    } else {
        return this.getTypedRuleContext(LeftRecExprContext,i);
    }
};

LeftRecExprContext.prototype.CARET = function() {
    return this.getToken(LeftRecursionGrammarParser.CARET, 0);
};

LeftRecExprContext.prototype.STAR = function() {
    return this.getToken(LeftRecursionGrammarParser.STAR, 0);
};

LeftRecExprContext.prototype.SLASH = function() {
    return this.getToken(LeftRecursionGrammarParser.SLASH, 0);
};

LeftRecExprContext.prototype.PERCENT = function() {
    return this.getToken(LeftRecursionGrammarParser.PERCENT, 0);
};

LeftRecExprContext.prototype.PLUS = function() {
    return this.getToken(LeftRecursionGrammarParser.PLUS, 0);
};

LeftRecExprContext.prototype.MINUS = function() {
    return this.getToken(LeftRecursionGrammarParser.MINUS, 0);
};

LeftRecExprContext.prototype.EQUAL = function() {
    return this.getToken(LeftRecursionGrammarParser.EQUAL, 0);
};

LeftRecExprContext.prototype.NOT_EQUAL = function() {
    return this.getToken(LeftRecursionGrammarParser.NOT_EQUAL, 0);
};

LeftRecExprContext.prototype.LOGICAL_AND = function() {
    return this.getToken(LeftRecursionGrammarParser.LOGICAL_AND, 0);
};

LeftRecExprContext.prototype.LOGICAL_OR = function() {
    return this.getToken(LeftRecursionGrammarParser.LOGICAL_OR, 0);
};



LeftRecursionGrammarParser.prototype.leftRecExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new LeftRecExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, LeftRecursionGrammarParser.RULE_leftRecExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.atom();
        this._ctx.stop = this._input.LT(-1);
        this.state = 49;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 47;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new LeftRecExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParser.RULE_leftRecExpr);
                    this.state = 29;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 30;
                    this.match(LeftRecursionGrammarParser.CARET);
                    this.state = 31;
                    this.leftRecExpr(6);
                    break;

                case 2:
                    localctx = new LeftRecExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParser.RULE_leftRecExpr);
                    this.state = 32;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 33;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LeftRecursionGrammarParser.STAR) | (1 << LeftRecursionGrammarParser.SLASH) | (1 << LeftRecursionGrammarParser.PERCENT))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 34;
                    this.leftRecExpr(6);
                    break;

                case 3:
                    localctx = new LeftRecExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParser.RULE_leftRecExpr);
                    this.state = 35;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 36;
                    _la = this._input.LA(1);
                    if(!(_la===LeftRecursionGrammarParser.PLUS || _la===LeftRecursionGrammarParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 37;
                    this.leftRecExpr(5);
                    break;

                case 4:
                    localctx = new LeftRecExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParser.RULE_leftRecExpr);
                    this.state = 38;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 39;
                    _la = this._input.LA(1);
                    if(!(_la===LeftRecursionGrammarParser.EQUAL || _la===LeftRecursionGrammarParser.NOT_EQUAL)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 40;
                    this.leftRecExpr(4);
                    break;

                case 5:
                    localctx = new LeftRecExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParser.RULE_leftRecExpr);
                    this.state = 41;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 42;
                    this.match(LeftRecursionGrammarParser.LOGICAL_AND);
                    this.state = 43;
                    this.leftRecExpr(3);
                    break;

                case 6:
                    localctx = new LeftRecExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParser.RULE_leftRecExpr);
                    this.state = 44;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 45;
                    this.match(LeftRecursionGrammarParser.LOGICAL_OR);
                    this.state = 46;
                    this.leftRecExpr(2);
                    break;

                } 
            }
            this.state = 51;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotLeftRecExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_notLeftRecExpr;
    return this;
}

NotLeftRecExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotLeftRecExprContext.prototype.constructor = NotLeftRecExprContext;

NotLeftRecExprContext.prototype.logicalAndExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogicalAndExprContext);
    } else {
        return this.getTypedRuleContext(LogicalAndExprContext,i);
    }
};

NotLeftRecExprContext.prototype.LOGICAL_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.LOGICAL_OR);
    } else {
        return this.getToken(LeftRecursionGrammarParser.LOGICAL_OR, i);
    }
};





LeftRecursionGrammarParser.NotLeftRecExprContext = NotLeftRecExprContext;

LeftRecursionGrammarParser.prototype.notLeftRecExpr = function() {

    var localctx = new NotLeftRecExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LeftRecursionGrammarParser.RULE_notLeftRecExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.logicalAndExpr();
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LeftRecursionGrammarParser.LOGICAL_OR) {
            this.state = 53;
            this.match(LeftRecursionGrammarParser.LOGICAL_OR);
            this.state = 54;
            this.logicalAndExpr();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function LogicalAndExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_logicalAndExpr;
    return this;
}

LogicalAndExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalAndExprContext.prototype.constructor = LogicalAndExprContext;

LogicalAndExprContext.prototype.equalExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EqualExprContext);
    } else {
        return this.getTypedRuleContext(EqualExprContext,i);
    }
};

LogicalAndExprContext.prototype.LOGICAL_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.LOGICAL_AND);
    } else {
        return this.getToken(LeftRecursionGrammarParser.LOGICAL_AND, i);
    }
};





LeftRecursionGrammarParser.LogicalAndExprContext = LogicalAndExprContext;

LeftRecursionGrammarParser.prototype.logicalAndExpr = function() {

    var localctx = new LogicalAndExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LeftRecursionGrammarParser.RULE_logicalAndExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.equalExpr();
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LeftRecursionGrammarParser.LOGICAL_AND) {
            this.state = 61;
            this.match(LeftRecursionGrammarParser.LOGICAL_AND);
            this.state = 62;
            this.equalExpr();
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function EqualExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_equalExpr;
    return this;
}

EqualExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualExprContext.prototype.constructor = EqualExprContext;

EqualExprContext.prototype.addExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddExprContext);
    } else {
        return this.getTypedRuleContext(AddExprContext,i);
    }
};

EqualExprContext.prototype.EQUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.EQUAL);
    } else {
        return this.getToken(LeftRecursionGrammarParser.EQUAL, i);
    }
};


EqualExprContext.prototype.NOT_EQUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.NOT_EQUAL);
    } else {
        return this.getToken(LeftRecursionGrammarParser.NOT_EQUAL, i);
    }
};





LeftRecursionGrammarParser.EqualExprContext = EqualExprContext;

LeftRecursionGrammarParser.prototype.equalExpr = function() {

    var localctx = new EqualExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LeftRecursionGrammarParser.RULE_equalExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.addExpr();
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LeftRecursionGrammarParser.EQUAL || _la===LeftRecursionGrammarParser.NOT_EQUAL) {
            this.state = 69;
            _la = this._input.LA(1);
            if(!(_la===LeftRecursionGrammarParser.EQUAL || _la===LeftRecursionGrammarParser.NOT_EQUAL)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 70;
            this.addExpr();
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function AddExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_addExpr;
    return this;
}

AddExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddExprContext.prototype.constructor = AddExprContext;

AddExprContext.prototype.multExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultExprContext);
    } else {
        return this.getTypedRuleContext(MultExprContext,i);
    }
};

AddExprContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.PLUS);
    } else {
        return this.getToken(LeftRecursionGrammarParser.PLUS, i);
    }
};


AddExprContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.MINUS);
    } else {
        return this.getToken(LeftRecursionGrammarParser.MINUS, i);
    }
};





LeftRecursionGrammarParser.AddExprContext = AddExprContext;

LeftRecursionGrammarParser.prototype.addExpr = function() {

    var localctx = new AddExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LeftRecursionGrammarParser.RULE_addExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.multExpr();
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LeftRecursionGrammarParser.PLUS || _la===LeftRecursionGrammarParser.MINUS) {
            this.state = 77;
            _la = this._input.LA(1);
            if(!(_la===LeftRecursionGrammarParser.PLUS || _la===LeftRecursionGrammarParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 78;
            this.multExpr();
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function MultExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_multExpr;
    return this;
}

MultExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultExprContext.prototype.constructor = MultExprContext;

MultExprContext.prototype.powerExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PowerExprContext);
    } else {
        return this.getTypedRuleContext(PowerExprContext,i);
    }
};

MultExprContext.prototype.STAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.STAR);
    } else {
        return this.getToken(LeftRecursionGrammarParser.STAR, i);
    }
};


MultExprContext.prototype.SLASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.SLASH);
    } else {
        return this.getToken(LeftRecursionGrammarParser.SLASH, i);
    }
};


MultExprContext.prototype.PERCENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.PERCENT);
    } else {
        return this.getToken(LeftRecursionGrammarParser.PERCENT, i);
    }
};





LeftRecursionGrammarParser.MultExprContext = MultExprContext;

LeftRecursionGrammarParser.prototype.multExpr = function() {

    var localctx = new MultExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LeftRecursionGrammarParser.RULE_multExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.powerExpr();
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LeftRecursionGrammarParser.STAR) | (1 << LeftRecursionGrammarParser.SLASH) | (1 << LeftRecursionGrammarParser.PERCENT))) !== 0)) {
            this.state = 85;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LeftRecursionGrammarParser.STAR) | (1 << LeftRecursionGrammarParser.SLASH) | (1 << LeftRecursionGrammarParser.PERCENT))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 86;
            this.powerExpr();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function PowerExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_powerExpr;
    return this;
}

PowerExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowerExprContext.prototype.constructor = PowerExprContext;

PowerExprContext.prototype.atom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AtomContext);
    } else {
        return this.getTypedRuleContext(AtomContext,i);
    }
};

PowerExprContext.prototype.CARET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LeftRecursionGrammarParser.CARET);
    } else {
        return this.getToken(LeftRecursionGrammarParser.CARET, i);
    }
};





LeftRecursionGrammarParser.PowerExprContext = PowerExprContext;

LeftRecursionGrammarParser.prototype.powerExpr = function() {

    var localctx = new PowerExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LeftRecursionGrammarParser.RULE_powerExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.atom();
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LeftRecursionGrammarParser.CARET) {
            this.state = 93;
            this.match(LeftRecursionGrammarParser.CARET);
            this.state = 94;
            this.atom();
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LeftRecursionGrammarParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.ID = function() {
    return this.getToken(LeftRecursionGrammarParser.ID, 0);
};

AtomContext.prototype.DIGIT = function() {
    return this.getToken(LeftRecursionGrammarParser.DIGIT, 0);
};




LeftRecursionGrammarParser.AtomContext = AtomContext;

LeftRecursionGrammarParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LeftRecursionGrammarParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        _la = this._input.LA(1);
        if(!(_la===LeftRecursionGrammarParser.ID || _la===LeftRecursionGrammarParser.DIGIT)) {
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
};


LeftRecursionGrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.leftRecExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LeftRecursionGrammarParser.prototype.leftRecExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LeftRecursionGrammarParser = LeftRecursionGrammarParser;
