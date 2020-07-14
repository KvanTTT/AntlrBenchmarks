package main

import (
	"fmt"
	"unicode"

	"github.com/antlr/antlr4/runtime/Go/antlr"
)

// Suppress unused import error
var _ = fmt.Printf
var _ = unicode.IsLetter

var serializedLexerAtn = []uint16{
	3, 24715, 42794, 33075, 47597, 16764, 15335, 30598, 22884, 2, 17, 77, 8,
	1, 4, 2, 9, 2, 4, 3, 9, 3, 4, 4, 9, 4, 4, 5, 9, 5, 4, 6, 9, 6, 4, 7, 9,
	7, 4, 8, 9, 8, 4, 9, 9, 9, 4, 10, 9, 10, 4, 11, 9, 11, 4, 12, 9, 12, 4,
	13, 9, 13, 4, 14, 9, 14, 4, 15, 9, 15, 4, 16, 9, 16, 3, 2, 3, 2, 3, 3,
	3, 3, 3, 4, 3, 4, 3, 5, 3, 5, 3, 6, 3, 6, 3, 7, 3, 7, 3, 8, 3, 8, 3, 8,
	3, 9, 3, 9, 3, 9, 3, 10, 3, 10, 3, 10, 3, 11, 3, 11, 3, 11, 3, 12, 3, 12,
	3, 13, 3, 13, 3, 14, 3, 14, 7, 14, 64, 10, 14, 12, 14, 14, 14, 67, 11,
	14, 3, 15, 6, 15, 70, 10, 15, 13, 15, 14, 15, 71, 3, 16, 3, 16, 3, 16,
	3, 16, 2, 2, 17, 3, 3, 5, 4, 7, 5, 9, 6, 11, 7, 13, 8, 15, 9, 17, 10, 19,
	11, 21, 12, 23, 13, 25, 14, 27, 15, 29, 16, 31, 17, 3, 2, 6, 5, 2, 67,
	92, 97, 97, 99, 124, 6, 2, 50, 59, 67, 92, 97, 97, 99, 124, 3, 2, 50, 59,
	5, 2, 11, 12, 15, 15, 34, 34, 2, 78, 2, 3, 3, 2, 2, 2, 2, 5, 3, 2, 2, 2,
	2, 7, 3, 2, 2, 2, 2, 9, 3, 2, 2, 2, 2, 11, 3, 2, 2, 2, 2, 13, 3, 2, 2,
	2, 2, 15, 3, 2, 2, 2, 2, 17, 3, 2, 2, 2, 2, 19, 3, 2, 2, 2, 2, 21, 3, 2,
	2, 2, 2, 23, 3, 2, 2, 2, 2, 25, 3, 2, 2, 2, 2, 27, 3, 2, 2, 2, 2, 29, 3,
	2, 2, 2, 2, 31, 3, 2, 2, 2, 3, 33, 3, 2, 2, 2, 5, 35, 3, 2, 2, 2, 7, 37,
	3, 2, 2, 2, 9, 39, 3, 2, 2, 2, 11, 41, 3, 2, 2, 2, 13, 43, 3, 2, 2, 2,
	15, 45, 3, 2, 2, 2, 17, 48, 3, 2, 2, 2, 19, 51, 3, 2, 2, 2, 21, 54, 3,
	2, 2, 2, 23, 57, 3, 2, 2, 2, 25, 59, 3, 2, 2, 2, 27, 61, 3, 2, 2, 2, 29,
	69, 3, 2, 2, 2, 31, 73, 3, 2, 2, 2, 33, 34, 7, 96, 2, 2, 34, 4, 3, 2, 2,
	2, 35, 36, 7, 44, 2, 2, 36, 6, 3, 2, 2, 2, 37, 38, 7, 49, 2, 2, 38, 8,
	3, 2, 2, 2, 39, 40, 7, 39, 2, 2, 40, 10, 3, 2, 2, 2, 41, 42, 7, 45, 2,
	2, 42, 12, 3, 2, 2, 2, 43, 44, 7, 47, 2, 2, 44, 14, 3, 2, 2, 2, 45, 46,
	7, 63, 2, 2, 46, 47, 7, 63, 2, 2, 47, 16, 3, 2, 2, 2, 48, 49, 7, 35, 2,
	2, 49, 50, 7, 63, 2, 2, 50, 18, 3, 2, 2, 2, 51, 52, 7, 40, 2, 2, 52, 53,
	7, 40, 2, 2, 53, 20, 3, 2, 2, 2, 54, 55, 7, 126, 2, 2, 55, 56, 7, 126,
	2, 2, 56, 22, 3, 2, 2, 2, 57, 58, 7, 65, 2, 2, 58, 24, 3, 2, 2, 2, 59,
	60, 7, 60, 2, 2, 60, 26, 3, 2, 2, 2, 61, 65, 9, 2, 2, 2, 62, 64, 9, 3,
	2, 2, 63, 62, 3, 2, 2, 2, 64, 67, 3, 2, 2, 2, 65, 63, 3, 2, 2, 2, 65, 66,
	3, 2, 2, 2, 66, 28, 3, 2, 2, 2, 67, 65, 3, 2, 2, 2, 68, 70, 9, 4, 2, 2,
	69, 68, 3, 2, 2, 2, 70, 71, 3, 2, 2, 2, 71, 69, 3, 2, 2, 2, 71, 72, 3,
	2, 2, 2, 72, 30, 3, 2, 2, 2, 73, 74, 9, 5, 2, 2, 74, 75, 3, 2, 2, 2, 75,
	76, 8, 16, 2, 2, 76, 32, 3, 2, 2, 2, 5, 2, 65, 71, 3, 2, 3, 2,
}

var lexerDeserializer = antlr.NewATNDeserializer(nil)
var lexerAtn = lexerDeserializer.DeserializeFromUInt16(serializedLexerAtn)

var lexerChannelNames = []string{
	"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
}

var lexerModeNames = []string{
	"DEFAULT_MODE",
}

var lexerLiteralNames = []string{
	"", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'=='", "'!='", "'&&'", "'||'",
	"'?'", "':'",
}

var lexerSymbolicNames = []string{
	"", "CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL",
	"LOGICAL_AND", "LOGICAL_OR", "QUESTION", "COLON", "ID", "DIGIT", "WS",
}

var lexerRuleNames = []string{
	"CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL",
	"LOGICAL_AND", "LOGICAL_OR", "QUESTION", "COLON", "ID", "DIGIT", "WS",
}

type LeftRecursionGrammarLexer struct {
	*antlr.BaseLexer
	channelNames []string
	modeNames    []string
	// TODO: EOF string
}

var lexerDecisionToDFA = make([]*antlr.DFA, len(lexerAtn.DecisionToState))

func init() {
	for index, ds := range lexerAtn.DecisionToState {
		lexerDecisionToDFA[index] = antlr.NewDFA(ds, index)
	}
}

func NewLeftRecursionGrammarLexer(input antlr.CharStream) *LeftRecursionGrammarLexer {

	l := new(LeftRecursionGrammarLexer)

	l.BaseLexer = antlr.NewBaseLexer(input)
	l.Interpreter = antlr.NewLexerATNSimulator(l, lexerAtn, lexerDecisionToDFA, antlr.NewPredictionContextCache())

	l.channelNames = lexerChannelNames
	l.modeNames = lexerModeNames
	l.RuleNames = lexerRuleNames
	l.LiteralNames = lexerLiteralNames
	l.SymbolicNames = lexerSymbolicNames
	l.GrammarFileName = "LeftRecursionGrammar.g4"
	// TODO: l.EOF = antlr.TokenEOF

	return l
}

// LeftRecursionGrammarLexer tokens.
const (
	LeftRecursionGrammarLexerCARET       = 1
	LeftRecursionGrammarLexerSTAR        = 2
	LeftRecursionGrammarLexerSLASH       = 3
	LeftRecursionGrammarLexerPERCENT     = 4
	LeftRecursionGrammarLexerPLUS        = 5
	LeftRecursionGrammarLexerMINUS       = 6
	LeftRecursionGrammarLexerEQUAL       = 7
	LeftRecursionGrammarLexerNOT_EQUAL   = 8
	LeftRecursionGrammarLexerLOGICAL_AND = 9
	LeftRecursionGrammarLexerLOGICAL_OR  = 10
	LeftRecursionGrammarLexerQUESTION    = 11
	LeftRecursionGrammarLexerCOLON       = 12
	LeftRecursionGrammarLexerID          = 13
	LeftRecursionGrammarLexerDIGIT       = 14
	LeftRecursionGrammarLexerWS          = 15
)
