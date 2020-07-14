// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0011M\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0007\u000e@\n\u000e\f\u000e",
    "\u000e\u000eC\u000b\u000e\u0003\u000f\u0006\u000fF\n\u000f\r\u000f\u000e",
    "\u000fG\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0002",
    "\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011\u0003\u0002\u0006\u0005\u0002C\\aac|\u0006\u0002",
    "2;C\\aac|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002N\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0003!\u0003\u0002\u0002\u0002\u0005",
    "#\u0003\u0002\u0002\u0002\u0007%\u0003\u0002\u0002\u0002\t\'\u0003\u0002",
    "\u0002\u0002\u000b)\u0003\u0002\u0002\u0002\r+\u0003\u0002\u0002\u0002",
    "\u000f-\u0003\u0002\u0002\u0002\u00110\u0003\u0002\u0002\u0002\u0013",
    "3\u0003\u0002\u0002\u0002\u00156\u0003\u0002\u0002\u0002\u00179\u0003",
    "\u0002\u0002\u0002\u0019;\u0003\u0002\u0002\u0002\u001b=\u0003\u0002",
    "\u0002\u0002\u001dE\u0003\u0002\u0002\u0002\u001fI\u0003\u0002\u0002",
    "\u0002!\"\u0007`\u0002\u0002\"\u0004\u0003\u0002\u0002\u0002#$\u0007",
    ",\u0002\u0002$\u0006\u0003\u0002\u0002\u0002%&\u00071\u0002\u0002&\b",
    "\u0003\u0002\u0002\u0002\'(\u0007\'\u0002\u0002(\n\u0003\u0002\u0002",
    "\u0002)*\u0007-\u0002\u0002*\f\u0003\u0002\u0002\u0002+,\u0007/\u0002",
    "\u0002,\u000e\u0003\u0002\u0002\u0002-.\u0007?\u0002\u0002./\u0007?",
    "\u0002\u0002/\u0010\u0003\u0002\u0002\u000201\u0007#\u0002\u000212\u0007",
    "?\u0002\u00022\u0012\u0003\u0002\u0002\u000234\u0007(\u0002\u000245",
    "\u0007(\u0002\u00025\u0014\u0003\u0002\u0002\u000267\u0007~\u0002\u0002",
    "78\u0007~\u0002\u00028\u0016\u0003\u0002\u0002\u00029:\u0007A\u0002",
    "\u0002:\u0018\u0003\u0002\u0002\u0002;<\u0007<\u0002\u0002<\u001a\u0003",
    "\u0002\u0002\u0002=A\t\u0002\u0002\u0002>@\t\u0003\u0002\u0002?>\u0003",
    "\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002B\u001c\u0003\u0002\u0002\u0002CA\u0003\u0002",
    "\u0002\u0002DF\t\u0004\u0002\u0002ED\u0003\u0002\u0002\u0002FG\u0003",
    "\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "H\u001e\u0003\u0002\u0002\u0002IJ\t\u0005\u0002\u0002JK\u0003\u0002",
    "\u0002\u0002KL\b\u0010\u0002\u0002L \u0003\u0002\u0002\u0002\u0005\u0002",
    "AG\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LeftRecursionGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LeftRecursionGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
LeftRecursionGrammarLexer.prototype.constructor = LeftRecursionGrammarLexer;

Object.defineProperty(LeftRecursionGrammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

LeftRecursionGrammarLexer.EOF = antlr4.Token.EOF;
LeftRecursionGrammarLexer.CARET = 1;
LeftRecursionGrammarLexer.STAR = 2;
LeftRecursionGrammarLexer.SLASH = 3;
LeftRecursionGrammarLexer.PERCENT = 4;
LeftRecursionGrammarLexer.PLUS = 5;
LeftRecursionGrammarLexer.MINUS = 6;
LeftRecursionGrammarLexer.EQUAL = 7;
LeftRecursionGrammarLexer.NOT_EQUAL = 8;
LeftRecursionGrammarLexer.LOGICAL_AND = 9;
LeftRecursionGrammarLexer.LOGICAL_OR = 10;
LeftRecursionGrammarLexer.QUESTION = 11;
LeftRecursionGrammarLexer.COLON = 12;
LeftRecursionGrammarLexer.ID = 13;
LeftRecursionGrammarLexer.DIGIT = 14;
LeftRecursionGrammarLexer.WS = 15;

LeftRecursionGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LeftRecursionGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LeftRecursionGrammarLexer.prototype.literalNames = [ null, "'^'", "'*'", 
                                                     "'/'", "'%'", "'+'", 
                                                     "'-'", "'=='", "'!='", 
                                                     "'&&'", "'||'", "'?'", 
                                                     "':'" ];

LeftRecursionGrammarLexer.prototype.symbolicNames = [ null, "CARET", "STAR", 
                                                      "SLASH", "PERCENT", 
                                                      "PLUS", "MINUS", "EQUAL", 
                                                      "NOT_EQUAL", "LOGICAL_AND", 
                                                      "LOGICAL_OR", "QUESTION", 
                                                      "COLON", "ID", "DIGIT", 
                                                      "WS" ];

LeftRecursionGrammarLexer.prototype.ruleNames = [ "CARET", "STAR", "SLASH", 
                                                  "PERCENT", "PLUS", "MINUS", 
                                                  "EQUAL", "NOT_EQUAL", 
                                                  "LOGICAL_AND", "LOGICAL_OR", 
                                                  "QUESTION", "COLON", "ID", 
                                                  "DIGIT", "WS" ];

LeftRecursionGrammarLexer.prototype.grammarFileName = "LeftRecursionGrammar.g4";


exports.LeftRecursionGrammarLexer = LeftRecursionGrammarLexer;

