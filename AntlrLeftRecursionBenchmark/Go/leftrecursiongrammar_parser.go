package main // LeftRecursionGrammar
import (
	"fmt"
	"reflect"
	"strconv"

	"github.com/antlr/antlr4/runtime/Go/antlr"
)

// Suppress unused import errors
var _ = fmt.Printf
var _ = reflect.Copy
var _ = strconv.Itoa

var parserATN = []uint16{
	3, 24715, 42794, 33075, 47597, 16764, 15335, 30598, 22884, 3, 17, 105,
	4, 2, 9, 2, 4, 3, 9, 3, 4, 4, 9, 4, 4, 5, 9, 5, 4, 6, 9, 6, 4, 7, 9, 7,
	4, 8, 9, 8, 4, 9, 9, 9, 4, 10, 9, 10, 4, 11, 9, 11, 3, 2, 3, 2, 3, 2, 3,
	3, 3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3,
	4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 7,
	4, 50, 10, 4, 12, 4, 14, 4, 53, 11, 4, 3, 5, 3, 5, 3, 5, 7, 5, 58, 10,
	5, 12, 5, 14, 5, 61, 11, 5, 3, 6, 3, 6, 3, 6, 7, 6, 66, 10, 6, 12, 6, 14,
	6, 69, 11, 6, 3, 7, 3, 7, 3, 7, 7, 7, 74, 10, 7, 12, 7, 14, 7, 77, 11,
	7, 3, 8, 3, 8, 3, 8, 7, 8, 82, 10, 8, 12, 8, 14, 8, 85, 11, 8, 3, 9, 3,
	9, 3, 9, 7, 9, 90, 10, 9, 12, 9, 14, 9, 93, 11, 9, 3, 10, 3, 10, 3, 10,
	7, 10, 98, 10, 10, 12, 10, 14, 10, 101, 11, 10, 3, 11, 3, 11, 3, 11, 2,
	3, 6, 12, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 2, 6, 3, 2, 4, 6, 3, 2, 7,
	8, 3, 2, 9, 10, 3, 2, 15, 16, 2, 106, 2, 22, 3, 2, 2, 2, 4, 25, 3, 2, 2,
	2, 6, 28, 3, 2, 2, 2, 8, 54, 3, 2, 2, 2, 10, 62, 3, 2, 2, 2, 12, 70, 3,
	2, 2, 2, 14, 78, 3, 2, 2, 2, 16, 86, 3, 2, 2, 2, 18, 94, 3, 2, 2, 2, 20,
	102, 3, 2, 2, 2, 22, 23, 5, 6, 4, 2, 23, 24, 7, 2, 2, 3, 24, 3, 3, 2, 2,
	2, 25, 26, 5, 8, 5, 2, 26, 27, 7, 2, 2, 3, 27, 5, 3, 2, 2, 2, 28, 29, 8,
	4, 1, 2, 29, 30, 5, 20, 11, 2, 30, 51, 3, 2, 2, 2, 31, 32, 12, 8, 2, 2,
	32, 33, 7, 3, 2, 2, 33, 50, 5, 6, 4, 8, 34, 35, 12, 7, 2, 2, 35, 36, 9,
	2, 2, 2, 36, 50, 5, 6, 4, 8, 37, 38, 12, 6, 2, 2, 38, 39, 9, 3, 2, 2, 39,
	50, 5, 6, 4, 7, 40, 41, 12, 5, 2, 2, 41, 42, 9, 4, 2, 2, 42, 50, 5, 6,
	4, 6, 43, 44, 12, 4, 2, 2, 44, 45, 7, 11, 2, 2, 45, 50, 5, 6, 4, 5, 46,
	47, 12, 3, 2, 2, 47, 48, 7, 12, 2, 2, 48, 50, 5, 6, 4, 4, 49, 31, 3, 2,
	2, 2, 49, 34, 3, 2, 2, 2, 49, 37, 3, 2, 2, 2, 49, 40, 3, 2, 2, 2, 49, 43,
	3, 2, 2, 2, 49, 46, 3, 2, 2, 2, 50, 53, 3, 2, 2, 2, 51, 49, 3, 2, 2, 2,
	51, 52, 3, 2, 2, 2, 52, 7, 3, 2, 2, 2, 53, 51, 3, 2, 2, 2, 54, 59, 5, 10,
	6, 2, 55, 56, 7, 12, 2, 2, 56, 58, 5, 10, 6, 2, 57, 55, 3, 2, 2, 2, 58,
	61, 3, 2, 2, 2, 59, 57, 3, 2, 2, 2, 59, 60, 3, 2, 2, 2, 60, 9, 3, 2, 2,
	2, 61, 59, 3, 2, 2, 2, 62, 67, 5, 12, 7, 2, 63, 64, 7, 11, 2, 2, 64, 66,
	5, 12, 7, 2, 65, 63, 3, 2, 2, 2, 66, 69, 3, 2, 2, 2, 67, 65, 3, 2, 2, 2,
	67, 68, 3, 2, 2, 2, 68, 11, 3, 2, 2, 2, 69, 67, 3, 2, 2, 2, 70, 75, 5,
	14, 8, 2, 71, 72, 9, 4, 2, 2, 72, 74, 5, 14, 8, 2, 73, 71, 3, 2, 2, 2,
	74, 77, 3, 2, 2, 2, 75, 73, 3, 2, 2, 2, 75, 76, 3, 2, 2, 2, 76, 13, 3,
	2, 2, 2, 77, 75, 3, 2, 2, 2, 78, 83, 5, 16, 9, 2, 79, 80, 9, 3, 2, 2, 80,
	82, 5, 16, 9, 2, 81, 79, 3, 2, 2, 2, 82, 85, 3, 2, 2, 2, 83, 81, 3, 2,
	2, 2, 83, 84, 3, 2, 2, 2, 84, 15, 3, 2, 2, 2, 85, 83, 3, 2, 2, 2, 86, 91,
	5, 18, 10, 2, 87, 88, 9, 2, 2, 2, 88, 90, 5, 18, 10, 2, 89, 87, 3, 2, 2,
	2, 90, 93, 3, 2, 2, 2, 91, 89, 3, 2, 2, 2, 91, 92, 3, 2, 2, 2, 92, 17,
	3, 2, 2, 2, 93, 91, 3, 2, 2, 2, 94, 99, 5, 20, 11, 2, 95, 96, 7, 3, 2,
	2, 96, 98, 5, 20, 11, 2, 97, 95, 3, 2, 2, 2, 98, 101, 3, 2, 2, 2, 99, 97,
	3, 2, 2, 2, 99, 100, 3, 2, 2, 2, 100, 19, 3, 2, 2, 2, 101, 99, 3, 2, 2,
	2, 102, 103, 9, 5, 2, 2, 103, 21, 3, 2, 2, 2, 10, 49, 51, 59, 67, 75, 83,
	91, 99,
}
var deserializer = antlr.NewATNDeserializer(nil)
var deserializedATN = deserializer.DeserializeFromUInt16(parserATN)

var literalNames = []string{
	"", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'=='", "'!='", "'&&'", "'||'",
	"'?'", "':'",
}
var symbolicNames = []string{
	"", "CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL",
	"LOGICAL_AND", "LOGICAL_OR", "QUESTION", "COLON", "ID", "DIGIT", "WS",
}

var ruleNames = []string{
	"leftRecExprRoot", "notLeftRecExprRoot", "leftRecExpr", "notLeftRecExpr",
	"logicalAndExpr", "equalExpr", "addExpr", "multExpr", "powerExpr", "atom",
}
var decisionToDFA = make([]*antlr.DFA, len(deserializedATN.DecisionToState))

func init() {
	for index, ds := range deserializedATN.DecisionToState {
		decisionToDFA[index] = antlr.NewDFA(ds, index)
	}
}

type LeftRecursionGrammarParser struct {
	*antlr.BaseParser
}

func NewLeftRecursionGrammarParser(input antlr.TokenStream) *LeftRecursionGrammarParser {
	this := new(LeftRecursionGrammarParser)

	this.BaseParser = antlr.NewBaseParser(input)

	this.Interpreter = antlr.NewParserATNSimulator(this, deserializedATN, decisionToDFA, antlr.NewPredictionContextCache())
	this.RuleNames = ruleNames
	this.LiteralNames = literalNames
	this.SymbolicNames = symbolicNames
	this.GrammarFileName = "LeftRecursionGrammar.g4"

	return this
}

// LeftRecursionGrammarParser tokens.
const (
	LeftRecursionGrammarParserEOF         = antlr.TokenEOF
	LeftRecursionGrammarParserCARET       = 1
	LeftRecursionGrammarParserSTAR        = 2
	LeftRecursionGrammarParserSLASH       = 3
	LeftRecursionGrammarParserPERCENT     = 4
	LeftRecursionGrammarParserPLUS        = 5
	LeftRecursionGrammarParserMINUS       = 6
	LeftRecursionGrammarParserEQUAL       = 7
	LeftRecursionGrammarParserNOT_EQUAL   = 8
	LeftRecursionGrammarParserLOGICAL_AND = 9
	LeftRecursionGrammarParserLOGICAL_OR  = 10
	LeftRecursionGrammarParserQUESTION    = 11
	LeftRecursionGrammarParserCOLON       = 12
	LeftRecursionGrammarParserID          = 13
	LeftRecursionGrammarParserDIGIT       = 14
	LeftRecursionGrammarParserWS          = 15
)

// LeftRecursionGrammarParser rules.
const (
	LeftRecursionGrammarParserRULE_leftRecExprRoot    = 0
	LeftRecursionGrammarParserRULE_notLeftRecExprRoot = 1
	LeftRecursionGrammarParserRULE_leftRecExpr        = 2
	LeftRecursionGrammarParserRULE_notLeftRecExpr     = 3
	LeftRecursionGrammarParserRULE_logicalAndExpr     = 4
	LeftRecursionGrammarParserRULE_equalExpr          = 5
	LeftRecursionGrammarParserRULE_addExpr            = 6
	LeftRecursionGrammarParserRULE_multExpr           = 7
	LeftRecursionGrammarParserRULE_powerExpr          = 8
	LeftRecursionGrammarParserRULE_atom               = 9
)

// ILeftRecExprRootContext is an interface to support dynamic dispatch.
type ILeftRecExprRootContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsLeftRecExprRootContext differentiates from other interfaces.
	IsLeftRecExprRootContext()
}

type LeftRecExprRootContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyLeftRecExprRootContext() *LeftRecExprRootContext {
	var p = new(LeftRecExprRootContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_leftRecExprRoot
	return p
}

func (*LeftRecExprRootContext) IsLeftRecExprRootContext() {}

func NewLeftRecExprRootContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *LeftRecExprRootContext {
	var p = new(LeftRecExprRootContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_leftRecExprRoot

	return p
}

func (s *LeftRecExprRootContext) GetParser() antlr.Parser { return s.parser }

func (s *LeftRecExprRootContext) LeftRecExpr() ILeftRecExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*ILeftRecExprContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(ILeftRecExprContext)
}

func (s *LeftRecExprRootContext) EOF() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserEOF, 0)
}

func (s *LeftRecExprRootContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *LeftRecExprRootContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) LeftRecExprRoot() (localctx ILeftRecExprRootContext) {
	localctx = NewLeftRecExprRootContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 0, LeftRecursionGrammarParserRULE_leftRecExprRoot)

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(20)
		p.leftRecExpr(0)
	}
	{
		p.SetState(21)
		p.Match(LeftRecursionGrammarParserEOF)
	}

	return localctx
}

// INotLeftRecExprRootContext is an interface to support dynamic dispatch.
type INotLeftRecExprRootContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsNotLeftRecExprRootContext differentiates from other interfaces.
	IsNotLeftRecExprRootContext()
}

type NotLeftRecExprRootContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyNotLeftRecExprRootContext() *NotLeftRecExprRootContext {
	var p = new(NotLeftRecExprRootContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_notLeftRecExprRoot
	return p
}

func (*NotLeftRecExprRootContext) IsNotLeftRecExprRootContext() {}

func NewNotLeftRecExprRootContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *NotLeftRecExprRootContext {
	var p = new(NotLeftRecExprRootContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_notLeftRecExprRoot

	return p
}

func (s *NotLeftRecExprRootContext) GetParser() antlr.Parser { return s.parser }

func (s *NotLeftRecExprRootContext) NotLeftRecExpr() INotLeftRecExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*INotLeftRecExprContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(INotLeftRecExprContext)
}

func (s *NotLeftRecExprRootContext) EOF() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserEOF, 0)
}

func (s *NotLeftRecExprRootContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *NotLeftRecExprRootContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) NotLeftRecExprRoot() (localctx INotLeftRecExprRootContext) {
	localctx = NewNotLeftRecExprRootContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 2, LeftRecursionGrammarParserRULE_notLeftRecExprRoot)

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(23)
		p.NotLeftRecExpr()
	}
	{
		p.SetState(24)
		p.Match(LeftRecursionGrammarParserEOF)
	}

	return localctx
}

// ILeftRecExprContext is an interface to support dynamic dispatch.
type ILeftRecExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsLeftRecExprContext differentiates from other interfaces.
	IsLeftRecExprContext()
}

type LeftRecExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyLeftRecExprContext() *LeftRecExprContext {
	var p = new(LeftRecExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_leftRecExpr
	return p
}

func (*LeftRecExprContext) IsLeftRecExprContext() {}

func NewLeftRecExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *LeftRecExprContext {
	var p = new(LeftRecExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_leftRecExpr

	return p
}

func (s *LeftRecExprContext) GetParser() antlr.Parser { return s.parser }

func (s *LeftRecExprContext) Atom() IAtomContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IAtomContext)(nil)).Elem(), 0)

	if t == nil {
		return nil
	}

	return t.(IAtomContext)
}

func (s *LeftRecExprContext) AllLeftRecExpr() []ILeftRecExprContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*ILeftRecExprContext)(nil)).Elem())
	var tst = make([]ILeftRecExprContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(ILeftRecExprContext)
		}
	}

	return tst
}

func (s *LeftRecExprContext) LeftRecExpr(i int) ILeftRecExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*ILeftRecExprContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(ILeftRecExprContext)
}

func (s *LeftRecExprContext) CARET() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserCARET, 0)
}

func (s *LeftRecExprContext) STAR() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserSTAR, 0)
}

func (s *LeftRecExprContext) SLASH() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserSLASH, 0)
}

func (s *LeftRecExprContext) PERCENT() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserPERCENT, 0)
}

func (s *LeftRecExprContext) PLUS() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserPLUS, 0)
}

func (s *LeftRecExprContext) MINUS() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserMINUS, 0)
}

func (s *LeftRecExprContext) EQUAL() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserEQUAL, 0)
}

func (s *LeftRecExprContext) NOT_EQUAL() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserNOT_EQUAL, 0)
}

func (s *LeftRecExprContext) LOGICAL_AND() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserLOGICAL_AND, 0)
}

func (s *LeftRecExprContext) LOGICAL_OR() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserLOGICAL_OR, 0)
}

func (s *LeftRecExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *LeftRecExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) LeftRecExpr() (localctx ILeftRecExprContext) {
	return p.leftRecExpr(0)
}

func (p *LeftRecursionGrammarParser) leftRecExpr(_p int) (localctx ILeftRecExprContext) {
	var _parentctx antlr.ParserRuleContext = p.GetParserRuleContext()
	_parentState := p.GetState()
	localctx = NewLeftRecExprContext(p, p.GetParserRuleContext(), _parentState)
	var _prevctx ILeftRecExprContext = localctx
	var _ antlr.ParserRuleContext = _prevctx // TODO: To prevent unused variable warning.
	_startState := 4
	p.EnterRecursionRule(localctx, 4, LeftRecursionGrammarParserRULE_leftRecExpr, _p)
	var _la int

	defer func() {
		p.UnrollRecursionContexts(_parentctx)
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	var _alt int

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(27)
		p.Atom()
	}

	p.GetParserRuleContext().SetStop(p.GetTokenStream().LT(-1))
	p.SetState(49)
	p.GetErrorHandler().Sync(p)
	_alt = p.GetInterpreter().AdaptivePredict(p.GetTokenStream(), 1, p.GetParserRuleContext())

	for _alt != 2 && _alt != antlr.ATNInvalidAltNumber {
		if _alt == 1 {
			if p.GetParseListeners() != nil {
				p.TriggerExitRuleEvent()
			}
			_prevctx = localctx
			p.SetState(47)
			p.GetErrorHandler().Sync(p)
			switch p.GetInterpreter().AdaptivePredict(p.GetTokenStream(), 0, p.GetParserRuleContext()) {
			case 1:
				localctx = NewLeftRecExprContext(p, _parentctx, _parentState)
				p.PushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParserRULE_leftRecExpr)
				p.SetState(29)

				if !(p.Precpred(p.GetParserRuleContext(), 6)) {
					panic(antlr.NewFailedPredicateException(p, "p.Precpred(p.GetParserRuleContext(), 6)", ""))
				}
				{
					p.SetState(30)
					p.Match(LeftRecursionGrammarParserCARET)
				}
				{
					p.SetState(31)
					p.leftRecExpr(6)
				}

			case 2:
				localctx = NewLeftRecExprContext(p, _parentctx, _parentState)
				p.PushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParserRULE_leftRecExpr)
				p.SetState(32)

				if !(p.Precpred(p.GetParserRuleContext(), 5)) {
					panic(antlr.NewFailedPredicateException(p, "p.Precpred(p.GetParserRuleContext(), 5)", ""))
				}
				{
					p.SetState(33)
					_la = p.GetTokenStream().LA(1)

					if !(((_la)&-(0x1f+1)) == 0 && ((1<<uint(_la))&((1<<LeftRecursionGrammarParserSTAR)|(1<<LeftRecursionGrammarParserSLASH)|(1<<LeftRecursionGrammarParserPERCENT))) != 0) {
						p.GetErrorHandler().RecoverInline(p)
					} else {
						p.GetErrorHandler().ReportMatch(p)
						p.Consume()
					}
				}
				{
					p.SetState(34)
					p.leftRecExpr(6)
				}

			case 3:
				localctx = NewLeftRecExprContext(p, _parentctx, _parentState)
				p.PushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParserRULE_leftRecExpr)
				p.SetState(35)

				if !(p.Precpred(p.GetParserRuleContext(), 4)) {
					panic(antlr.NewFailedPredicateException(p, "p.Precpred(p.GetParserRuleContext(), 4)", ""))
				}
				{
					p.SetState(36)
					_la = p.GetTokenStream().LA(1)

					if !(_la == LeftRecursionGrammarParserPLUS || _la == LeftRecursionGrammarParserMINUS) {
						p.GetErrorHandler().RecoverInline(p)
					} else {
						p.GetErrorHandler().ReportMatch(p)
						p.Consume()
					}
				}
				{
					p.SetState(37)
					p.leftRecExpr(5)
				}

			case 4:
				localctx = NewLeftRecExprContext(p, _parentctx, _parentState)
				p.PushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParserRULE_leftRecExpr)
				p.SetState(38)

				if !(p.Precpred(p.GetParserRuleContext(), 3)) {
					panic(antlr.NewFailedPredicateException(p, "p.Precpred(p.GetParserRuleContext(), 3)", ""))
				}
				{
					p.SetState(39)
					_la = p.GetTokenStream().LA(1)

					if !(_la == LeftRecursionGrammarParserEQUAL || _la == LeftRecursionGrammarParserNOT_EQUAL) {
						p.GetErrorHandler().RecoverInline(p)
					} else {
						p.GetErrorHandler().ReportMatch(p)
						p.Consume()
					}
				}
				{
					p.SetState(40)
					p.leftRecExpr(4)
				}

			case 5:
				localctx = NewLeftRecExprContext(p, _parentctx, _parentState)
				p.PushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParserRULE_leftRecExpr)
				p.SetState(41)

				if !(p.Precpred(p.GetParserRuleContext(), 2)) {
					panic(antlr.NewFailedPredicateException(p, "p.Precpred(p.GetParserRuleContext(), 2)", ""))
				}
				{
					p.SetState(42)
					p.Match(LeftRecursionGrammarParserLOGICAL_AND)
				}
				{
					p.SetState(43)
					p.leftRecExpr(3)
				}

			case 6:
				localctx = NewLeftRecExprContext(p, _parentctx, _parentState)
				p.PushNewRecursionContext(localctx, _startState, LeftRecursionGrammarParserRULE_leftRecExpr)
				p.SetState(44)

				if !(p.Precpred(p.GetParserRuleContext(), 1)) {
					panic(antlr.NewFailedPredicateException(p, "p.Precpred(p.GetParserRuleContext(), 1)", ""))
				}
				{
					p.SetState(45)
					p.Match(LeftRecursionGrammarParserLOGICAL_OR)
				}
				{
					p.SetState(46)
					p.leftRecExpr(2)
				}

			}

		}
		p.SetState(51)
		p.GetErrorHandler().Sync(p)
		_alt = p.GetInterpreter().AdaptivePredict(p.GetTokenStream(), 1, p.GetParserRuleContext())
	}

	return localctx
}

// INotLeftRecExprContext is an interface to support dynamic dispatch.
type INotLeftRecExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsNotLeftRecExprContext differentiates from other interfaces.
	IsNotLeftRecExprContext()
}

type NotLeftRecExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyNotLeftRecExprContext() *NotLeftRecExprContext {
	var p = new(NotLeftRecExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_notLeftRecExpr
	return p
}

func (*NotLeftRecExprContext) IsNotLeftRecExprContext() {}

func NewNotLeftRecExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *NotLeftRecExprContext {
	var p = new(NotLeftRecExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_notLeftRecExpr

	return p
}

func (s *NotLeftRecExprContext) GetParser() antlr.Parser { return s.parser }

func (s *NotLeftRecExprContext) AllLogicalAndExpr() []ILogicalAndExprContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*ILogicalAndExprContext)(nil)).Elem())
	var tst = make([]ILogicalAndExprContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(ILogicalAndExprContext)
		}
	}

	return tst
}

func (s *NotLeftRecExprContext) LogicalAndExpr(i int) ILogicalAndExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*ILogicalAndExprContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(ILogicalAndExprContext)
}

func (s *NotLeftRecExprContext) AllLOGICAL_OR() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserLOGICAL_OR)
}

func (s *NotLeftRecExprContext) LOGICAL_OR(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserLOGICAL_OR, i)
}

func (s *NotLeftRecExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *NotLeftRecExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) NotLeftRecExpr() (localctx INotLeftRecExprContext) {
	localctx = NewNotLeftRecExprContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 6, LeftRecursionGrammarParserRULE_notLeftRecExpr)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(52)
		p.LogicalAndExpr()
	}
	p.SetState(57)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == LeftRecursionGrammarParserLOGICAL_OR {
		{
			p.SetState(53)
			p.Match(LeftRecursionGrammarParserLOGICAL_OR)
		}
		{
			p.SetState(54)
			p.LogicalAndExpr()
		}

		p.SetState(59)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// ILogicalAndExprContext is an interface to support dynamic dispatch.
type ILogicalAndExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsLogicalAndExprContext differentiates from other interfaces.
	IsLogicalAndExprContext()
}

type LogicalAndExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyLogicalAndExprContext() *LogicalAndExprContext {
	var p = new(LogicalAndExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_logicalAndExpr
	return p
}

func (*LogicalAndExprContext) IsLogicalAndExprContext() {}

func NewLogicalAndExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *LogicalAndExprContext {
	var p = new(LogicalAndExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_logicalAndExpr

	return p
}

func (s *LogicalAndExprContext) GetParser() antlr.Parser { return s.parser }

func (s *LogicalAndExprContext) AllEqualExpr() []IEqualExprContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*IEqualExprContext)(nil)).Elem())
	var tst = make([]IEqualExprContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(IEqualExprContext)
		}
	}

	return tst
}

func (s *LogicalAndExprContext) EqualExpr(i int) IEqualExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IEqualExprContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(IEqualExprContext)
}

func (s *LogicalAndExprContext) AllLOGICAL_AND() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserLOGICAL_AND)
}

func (s *LogicalAndExprContext) LOGICAL_AND(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserLOGICAL_AND, i)
}

func (s *LogicalAndExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *LogicalAndExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) LogicalAndExpr() (localctx ILogicalAndExprContext) {
	localctx = NewLogicalAndExprContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 8, LeftRecursionGrammarParserRULE_logicalAndExpr)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(60)
		p.EqualExpr()
	}
	p.SetState(65)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == LeftRecursionGrammarParserLOGICAL_AND {
		{
			p.SetState(61)
			p.Match(LeftRecursionGrammarParserLOGICAL_AND)
		}
		{
			p.SetState(62)
			p.EqualExpr()
		}

		p.SetState(67)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// IEqualExprContext is an interface to support dynamic dispatch.
type IEqualExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsEqualExprContext differentiates from other interfaces.
	IsEqualExprContext()
}

type EqualExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyEqualExprContext() *EqualExprContext {
	var p = new(EqualExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_equalExpr
	return p
}

func (*EqualExprContext) IsEqualExprContext() {}

func NewEqualExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *EqualExprContext {
	var p = new(EqualExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_equalExpr

	return p
}

func (s *EqualExprContext) GetParser() antlr.Parser { return s.parser }

func (s *EqualExprContext) AllAddExpr() []IAddExprContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*IAddExprContext)(nil)).Elem())
	var tst = make([]IAddExprContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(IAddExprContext)
		}
	}

	return tst
}

func (s *EqualExprContext) AddExpr(i int) IAddExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IAddExprContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(IAddExprContext)
}

func (s *EqualExprContext) AllEQUAL() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserEQUAL)
}

func (s *EqualExprContext) EQUAL(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserEQUAL, i)
}

func (s *EqualExprContext) AllNOT_EQUAL() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserNOT_EQUAL)
}

func (s *EqualExprContext) NOT_EQUAL(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserNOT_EQUAL, i)
}

func (s *EqualExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *EqualExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) EqualExpr() (localctx IEqualExprContext) {
	localctx = NewEqualExprContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 10, LeftRecursionGrammarParserRULE_equalExpr)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(68)
		p.AddExpr()
	}
	p.SetState(73)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == LeftRecursionGrammarParserEQUAL || _la == LeftRecursionGrammarParserNOT_EQUAL {
		{
			p.SetState(69)
			_la = p.GetTokenStream().LA(1)

			if !(_la == LeftRecursionGrammarParserEQUAL || _la == LeftRecursionGrammarParserNOT_EQUAL) {
				p.GetErrorHandler().RecoverInline(p)
			} else {
				p.GetErrorHandler().ReportMatch(p)
				p.Consume()
			}
		}
		{
			p.SetState(70)
			p.AddExpr()
		}

		p.SetState(75)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// IAddExprContext is an interface to support dynamic dispatch.
type IAddExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsAddExprContext differentiates from other interfaces.
	IsAddExprContext()
}

type AddExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyAddExprContext() *AddExprContext {
	var p = new(AddExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_addExpr
	return p
}

func (*AddExprContext) IsAddExprContext() {}

func NewAddExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *AddExprContext {
	var p = new(AddExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_addExpr

	return p
}

func (s *AddExprContext) GetParser() antlr.Parser { return s.parser }

func (s *AddExprContext) AllMultExpr() []IMultExprContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*IMultExprContext)(nil)).Elem())
	var tst = make([]IMultExprContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(IMultExprContext)
		}
	}

	return tst
}

func (s *AddExprContext) MultExpr(i int) IMultExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IMultExprContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(IMultExprContext)
}

func (s *AddExprContext) AllPLUS() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserPLUS)
}

func (s *AddExprContext) PLUS(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserPLUS, i)
}

func (s *AddExprContext) AllMINUS() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserMINUS)
}

func (s *AddExprContext) MINUS(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserMINUS, i)
}

func (s *AddExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *AddExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) AddExpr() (localctx IAddExprContext) {
	localctx = NewAddExprContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 12, LeftRecursionGrammarParserRULE_addExpr)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(76)
		p.MultExpr()
	}
	p.SetState(81)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == LeftRecursionGrammarParserPLUS || _la == LeftRecursionGrammarParserMINUS {
		{
			p.SetState(77)
			_la = p.GetTokenStream().LA(1)

			if !(_la == LeftRecursionGrammarParserPLUS || _la == LeftRecursionGrammarParserMINUS) {
				p.GetErrorHandler().RecoverInline(p)
			} else {
				p.GetErrorHandler().ReportMatch(p)
				p.Consume()
			}
		}
		{
			p.SetState(78)
			p.MultExpr()
		}

		p.SetState(83)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// IMultExprContext is an interface to support dynamic dispatch.
type IMultExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsMultExprContext differentiates from other interfaces.
	IsMultExprContext()
}

type MultExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyMultExprContext() *MultExprContext {
	var p = new(MultExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_multExpr
	return p
}

func (*MultExprContext) IsMultExprContext() {}

func NewMultExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *MultExprContext {
	var p = new(MultExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_multExpr

	return p
}

func (s *MultExprContext) GetParser() antlr.Parser { return s.parser }

func (s *MultExprContext) AllPowerExpr() []IPowerExprContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*IPowerExprContext)(nil)).Elem())
	var tst = make([]IPowerExprContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(IPowerExprContext)
		}
	}

	return tst
}

func (s *MultExprContext) PowerExpr(i int) IPowerExprContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IPowerExprContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(IPowerExprContext)
}

func (s *MultExprContext) AllSTAR() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserSTAR)
}

func (s *MultExprContext) STAR(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserSTAR, i)
}

func (s *MultExprContext) AllSLASH() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserSLASH)
}

func (s *MultExprContext) SLASH(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserSLASH, i)
}

func (s *MultExprContext) AllPERCENT() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserPERCENT)
}

func (s *MultExprContext) PERCENT(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserPERCENT, i)
}

func (s *MultExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *MultExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) MultExpr() (localctx IMultExprContext) {
	localctx = NewMultExprContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 14, LeftRecursionGrammarParserRULE_multExpr)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(84)
		p.PowerExpr()
	}
	p.SetState(89)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for ((_la)&-(0x1f+1)) == 0 && ((1<<uint(_la))&((1<<LeftRecursionGrammarParserSTAR)|(1<<LeftRecursionGrammarParserSLASH)|(1<<LeftRecursionGrammarParserPERCENT))) != 0 {
		{
			p.SetState(85)
			_la = p.GetTokenStream().LA(1)

			if !(((_la)&-(0x1f+1)) == 0 && ((1<<uint(_la))&((1<<LeftRecursionGrammarParserSTAR)|(1<<LeftRecursionGrammarParserSLASH)|(1<<LeftRecursionGrammarParserPERCENT))) != 0) {
				p.GetErrorHandler().RecoverInline(p)
			} else {
				p.GetErrorHandler().ReportMatch(p)
				p.Consume()
			}
		}
		{
			p.SetState(86)
			p.PowerExpr()
		}

		p.SetState(91)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// IPowerExprContext is an interface to support dynamic dispatch.
type IPowerExprContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsPowerExprContext differentiates from other interfaces.
	IsPowerExprContext()
}

type PowerExprContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyPowerExprContext() *PowerExprContext {
	var p = new(PowerExprContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_powerExpr
	return p
}

func (*PowerExprContext) IsPowerExprContext() {}

func NewPowerExprContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *PowerExprContext {
	var p = new(PowerExprContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_powerExpr

	return p
}

func (s *PowerExprContext) GetParser() antlr.Parser { return s.parser }

func (s *PowerExprContext) AllAtom() []IAtomContext {
	var ts = s.GetTypedRuleContexts(reflect.TypeOf((*IAtomContext)(nil)).Elem())
	var tst = make([]IAtomContext, len(ts))

	for i, t := range ts {
		if t != nil {
			tst[i] = t.(IAtomContext)
		}
	}

	return tst
}

func (s *PowerExprContext) Atom(i int) IAtomContext {
	var t = s.GetTypedRuleContext(reflect.TypeOf((*IAtomContext)(nil)).Elem(), i)

	if t == nil {
		return nil
	}

	return t.(IAtomContext)
}

func (s *PowerExprContext) AllCARET() []antlr.TerminalNode {
	return s.GetTokens(LeftRecursionGrammarParserCARET)
}

func (s *PowerExprContext) CARET(i int) antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserCARET, i)
}

func (s *PowerExprContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *PowerExprContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) PowerExpr() (localctx IPowerExprContext) {
	localctx = NewPowerExprContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 16, LeftRecursionGrammarParserRULE_powerExpr)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(92)
		p.Atom()
	}
	p.SetState(97)
	p.GetErrorHandler().Sync(p)
	_la = p.GetTokenStream().LA(1)

	for _la == LeftRecursionGrammarParserCARET {
		{
			p.SetState(93)
			p.Match(LeftRecursionGrammarParserCARET)
		}
		{
			p.SetState(94)
			p.Atom()
		}

		p.SetState(99)
		p.GetErrorHandler().Sync(p)
		_la = p.GetTokenStream().LA(1)
	}

	return localctx
}

// IAtomContext is an interface to support dynamic dispatch.
type IAtomContext interface {
	antlr.ParserRuleContext

	// GetParser returns the parser.
	GetParser() antlr.Parser

	// IsAtomContext differentiates from other interfaces.
	IsAtomContext()
}

type AtomContext struct {
	*antlr.BaseParserRuleContext
	parser antlr.Parser
}

func NewEmptyAtomContext() *AtomContext {
	var p = new(AtomContext)
	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(nil, -1)
	p.RuleIndex = LeftRecursionGrammarParserRULE_atom
	return p
}

func (*AtomContext) IsAtomContext() {}

func NewAtomContext(parser antlr.Parser, parent antlr.ParserRuleContext, invokingState int) *AtomContext {
	var p = new(AtomContext)

	p.BaseParserRuleContext = antlr.NewBaseParserRuleContext(parent, invokingState)

	p.parser = parser
	p.RuleIndex = LeftRecursionGrammarParserRULE_atom

	return p
}

func (s *AtomContext) GetParser() antlr.Parser { return s.parser }

func (s *AtomContext) ID() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserID, 0)
}

func (s *AtomContext) DIGIT() antlr.TerminalNode {
	return s.GetToken(LeftRecursionGrammarParserDIGIT, 0)
}

func (s *AtomContext) GetRuleContext() antlr.RuleContext {
	return s
}

func (s *AtomContext) ToStringTree(ruleNames []string, recog antlr.Recognizer) string {
	return antlr.TreesStringTree(s, ruleNames, recog)
}

func (p *LeftRecursionGrammarParser) Atom() (localctx IAtomContext) {
	localctx = NewAtomContext(p, p.GetParserRuleContext(), p.GetState())
	p.EnterRule(localctx, 18, LeftRecursionGrammarParserRULE_atom)
	var _la int

	defer func() {
		p.ExitRule()
	}()

	defer func() {
		if err := recover(); err != nil {
			if v, ok := err.(antlr.RecognitionException); ok {
				localctx.SetException(v)
				p.GetErrorHandler().ReportError(p, v)
				p.GetErrorHandler().Recover(p, v)
			} else {
				panic(err)
			}
		}
	}()

	p.EnterOuterAlt(localctx, 1)
	{
		p.SetState(100)
		_la = p.GetTokenStream().LA(1)

		if !(_la == LeftRecursionGrammarParserID || _la == LeftRecursionGrammarParserDIGIT) {
			p.GetErrorHandler().RecoverInline(p)
		} else {
			p.GetErrorHandler().ReportMatch(p)
			p.Consume()
		}
	}

	return localctx
}

func (p *LeftRecursionGrammarParser) Sempred(localctx antlr.RuleContext, ruleIndex, predIndex int) bool {
	switch ruleIndex {
	case 2:
		var t *LeftRecExprContext = nil
		if localctx != nil {
			t = localctx.(*LeftRecExprContext)
		}
		return p.LeftRecExpr_Sempred(t, predIndex)

	default:
		panic("No predicate with index: " + fmt.Sprint(ruleIndex))
	}
}

func (p *LeftRecursionGrammarParser) LeftRecExpr_Sempred(localctx antlr.RuleContext, predIndex int) bool {
	switch predIndex {
	case 0:
		return p.Precpred(p.GetParserRuleContext(), 6)

	case 1:
		return p.Precpred(p.GetParserRuleContext(), 5)

	case 2:
		return p.Precpred(p.GetParserRuleContext(), 4)

	case 3:
		return p.Precpred(p.GetParserRuleContext(), 3)

	case 4:
		return p.Precpred(p.GetParserRuleContext(), 2)

	case 5:
		return p.Precpred(p.GetParserRuleContext(), 1)

	default:
		panic("No predicate with index: " + fmt.Sprint(predIndex))
	}
}
