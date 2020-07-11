package antlr.benchmark;

import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LeftRecursionGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CARET=1, STAR=2, SLASH=3, PERCENT=4, PLUS=5, MINUS=6, EQUAL=7, NOT_EQUAL=8,
		LOGICAL_AND=9, LOGICAL_OR=10, QUESTION=11, COLON=12, ID=13, DIGIT=14,
		WS=15;
	public static final int
		RULE_leftRecExprRoot = 0, RULE_notLeftRecExprRoot = 1, RULE_leftRecExpr = 2,
		RULE_notLeftRecExpr = 3, RULE_logicalAndExpr = 4, RULE_equalExpr = 5,
		RULE_addExpr = 6, RULE_multExpr = 7, RULE_powerExpr = 8, RULE_atom = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"leftRecExprRoot", "notLeftRecExprRoot", "leftRecExpr", "notLeftRecExpr",
			"logicalAndExpr", "equalExpr", "addExpr", "multExpr", "powerExpr", "atom"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'=='", "'!='", "'&&'",
			"'||'", "'?'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS", "EQUAL",
			"NOT_EQUAL", "LOGICAL_AND", "LOGICAL_OR", "QUESTION", "COLON", "ID",
			"DIGIT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LeftRecursionGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LeftRecursionGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class LeftRecExprRootContext extends ParserRuleContext {
		public LeftRecExprContext leftRecExpr() {
			return getRuleContext(LeftRecExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LeftRecursionGrammarParser.EOF, 0); }
		public LeftRecExprRootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_leftRecExprRoot; }
	}

	public final LeftRecExprRootContext leftRecExprRoot() throws RecognitionException {
		LeftRecExprRootContext _localctx = new LeftRecExprRootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_leftRecExprRoot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			leftRecExpr(0);
			setState(21);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NotLeftRecExprRootContext extends ParserRuleContext {
		public NotLeftRecExprContext notLeftRecExpr() {
			return getRuleContext(NotLeftRecExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LeftRecursionGrammarParser.EOF, 0); }
		public NotLeftRecExprRootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notLeftRecExprRoot; }
	}

	public final NotLeftRecExprRootContext notLeftRecExprRoot() throws RecognitionException {
		NotLeftRecExprRootContext _localctx = new NotLeftRecExprRootContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_notLeftRecExprRoot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			notLeftRecExpr();
			setState(24);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LeftRecExprContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public List<LeftRecExprContext> leftRecExpr() {
			return getRuleContexts(LeftRecExprContext.class);
		}
		public LeftRecExprContext leftRecExpr(int i) {
			return getRuleContext(LeftRecExprContext.class,i);
		}
		public TerminalNode CARET() { return getToken(LeftRecursionGrammarParser.CARET, 0); }
		public TerminalNode STAR() { return getToken(LeftRecursionGrammarParser.STAR, 0); }
		public TerminalNode SLASH() { return getToken(LeftRecursionGrammarParser.SLASH, 0); }
		public TerminalNode PERCENT() { return getToken(LeftRecursionGrammarParser.PERCENT, 0); }
		public TerminalNode PLUS() { return getToken(LeftRecursionGrammarParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(LeftRecursionGrammarParser.MINUS, 0); }
		public TerminalNode EQUAL() { return getToken(LeftRecursionGrammarParser.EQUAL, 0); }
		public TerminalNode NOT_EQUAL() { return getToken(LeftRecursionGrammarParser.NOT_EQUAL, 0); }
		public TerminalNode LOGICAL_AND() { return getToken(LeftRecursionGrammarParser.LOGICAL_AND, 0); }
		public TerminalNode LOGICAL_OR() { return getToken(LeftRecursionGrammarParser.LOGICAL_OR, 0); }
		public LeftRecExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_leftRecExpr; }
	}

	public final LeftRecExprContext leftRecExpr() throws RecognitionException {
		return leftRecExpr(0);
	}

	private LeftRecExprContext leftRecExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LeftRecExprContext _localctx = new LeftRecExprContext(_ctx, _parentState);
		LeftRecExprContext _prevctx = _localctx;
		int _startState = 4;
		enterRecursionRule(_localctx, 4, RULE_leftRecExpr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(27);
			atom();
			}
			_ctx.stop = _input.LT(-1);
			setState(49);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(47);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
					case 1:
						{
						_localctx = new LeftRecExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_leftRecExpr);
						setState(29);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(30);
						match(CARET);
						setState(31);
						leftRecExpr(6);
						}
						break;
					case 2:
						{
						_localctx = new LeftRecExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_leftRecExpr);
						setState(32);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(33);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STAR) | (1L << SLASH) | (1L << PERCENT))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(34);
						leftRecExpr(6);
						}
						break;
					case 3:
						{
						_localctx = new LeftRecExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_leftRecExpr);
						setState(35);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(36);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(37);
						leftRecExpr(5);
						}
						break;
					case 4:
						{
						_localctx = new LeftRecExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_leftRecExpr);
						setState(38);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(39);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOT_EQUAL) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(40);
						leftRecExpr(4);
						}
						break;
					case 5:
						{
						_localctx = new LeftRecExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_leftRecExpr);
						setState(41);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(42);
						match(LOGICAL_AND);
						setState(43);
						leftRecExpr(3);
						}
						break;
					case 6:
						{
						_localctx = new LeftRecExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_leftRecExpr);
						setState(44);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(45);
						match(LOGICAL_OR);
						setState(46);
						leftRecExpr(2);
						}
						break;
					}
					}
				}
				setState(51);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class NotLeftRecExprContext extends ParserRuleContext {
		public List<LogicalAndExprContext> logicalAndExpr() {
			return getRuleContexts(LogicalAndExprContext.class);
		}
		public LogicalAndExprContext logicalAndExpr(int i) {
			return getRuleContext(LogicalAndExprContext.class,i);
		}
		public List<TerminalNode> LOGICAL_OR() { return getTokens(LeftRecursionGrammarParser.LOGICAL_OR); }
		public TerminalNode LOGICAL_OR(int i) {
			return getToken(LeftRecursionGrammarParser.LOGICAL_OR, i);
		}
		public NotLeftRecExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notLeftRecExpr; }
	}

	public final NotLeftRecExprContext notLeftRecExpr() throws RecognitionException {
		NotLeftRecExprContext _localctx = new NotLeftRecExprContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_notLeftRecExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			logicalAndExpr();
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGICAL_OR) {
				{
				{
				setState(53);
				match(LOGICAL_OR);
				setState(54);
				logicalAndExpr();
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicalAndExprContext extends ParserRuleContext {
		public List<EqualExprContext> equalExpr() {
			return getRuleContexts(EqualExprContext.class);
		}
		public EqualExprContext equalExpr(int i) {
			return getRuleContext(EqualExprContext.class,i);
		}
		public List<TerminalNode> LOGICAL_AND() { return getTokens(LeftRecursionGrammarParser.LOGICAL_AND); }
		public TerminalNode LOGICAL_AND(int i) {
			return getToken(LeftRecursionGrammarParser.LOGICAL_AND, i);
		}
		public LogicalAndExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalAndExpr; }
	}

	public final LogicalAndExprContext logicalAndExpr() throws RecognitionException {
		LogicalAndExprContext _localctx = new LogicalAndExprContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_logicalAndExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			equalExpr();
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGICAL_AND) {
				{
				{
				setState(61);
				match(LOGICAL_AND);
				setState(62);
				equalExpr();
				}
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EqualExprContext extends ParserRuleContext {
		public List<AddExprContext> addExpr() {
			return getRuleContexts(AddExprContext.class);
		}
		public AddExprContext addExpr(int i) {
			return getRuleContext(AddExprContext.class,i);
		}
		public List<TerminalNode> EQUAL() { return getTokens(LeftRecursionGrammarParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(LeftRecursionGrammarParser.EQUAL, i);
		}
		public List<TerminalNode> NOT_EQUAL() { return getTokens(LeftRecursionGrammarParser.NOT_EQUAL); }
		public TerminalNode NOT_EQUAL(int i) {
			return getToken(LeftRecursionGrammarParser.NOT_EQUAL, i);
		}
		public EqualExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equalExpr; }
	}

	public final EqualExprContext equalExpr() throws RecognitionException {
		EqualExprContext _localctx = new EqualExprContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_equalExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			addExpr();
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==EQUAL || _la==NOT_EQUAL) {
				{
				{
				setState(69);
				_la = _input.LA(1);
				if ( !(_la==EQUAL || _la==NOT_EQUAL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(70);
				addExpr();
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddExprContext extends ParserRuleContext {
		public List<MultExprContext> multExpr() {
			return getRuleContexts(MultExprContext.class);
		}
		public MultExprContext multExpr(int i) {
			return getRuleContext(MultExprContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(LeftRecursionGrammarParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(LeftRecursionGrammarParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(LeftRecursionGrammarParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(LeftRecursionGrammarParser.MINUS, i);
		}
		public AddExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addExpr; }
	}

	public final AddExprContext addExpr() throws RecognitionException {
		AddExprContext _localctx = new AddExprContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_addExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			multExpr();
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(77);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(78);
				multExpr();
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultExprContext extends ParserRuleContext {
		public List<PowerExprContext> powerExpr() {
			return getRuleContexts(PowerExprContext.class);
		}
		public PowerExprContext powerExpr(int i) {
			return getRuleContext(PowerExprContext.class,i);
		}
		public List<TerminalNode> STAR() { return getTokens(LeftRecursionGrammarParser.STAR); }
		public TerminalNode STAR(int i) {
			return getToken(LeftRecursionGrammarParser.STAR, i);
		}
		public List<TerminalNode> SLASH() { return getTokens(LeftRecursionGrammarParser.SLASH); }
		public TerminalNode SLASH(int i) {
			return getToken(LeftRecursionGrammarParser.SLASH, i);
		}
		public List<TerminalNode> PERCENT() { return getTokens(LeftRecursionGrammarParser.PERCENT); }
		public TerminalNode PERCENT(int i) {
			return getToken(LeftRecursionGrammarParser.PERCENT, i);
		}
		public MultExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multExpr; }
	}

	public final MultExprContext multExpr() throws RecognitionException {
		MultExprContext _localctx = new MultExprContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_multExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			powerExpr();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STAR) | (1L << SLASH) | (1L << PERCENT))) != 0)) {
				{
				{
				setState(85);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STAR) | (1L << SLASH) | (1L << PERCENT))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(86);
				powerExpr();
				}
				}
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PowerExprContext extends ParserRuleContext {
		public List<AtomContext> atom() {
			return getRuleContexts(AtomContext.class);
		}
		public AtomContext atom(int i) {
			return getRuleContext(AtomContext.class,i);
		}
		public List<TerminalNode> CARET() { return getTokens(LeftRecursionGrammarParser.CARET); }
		public TerminalNode CARET(int i) {
			return getToken(LeftRecursionGrammarParser.CARET, i);
		}
		public PowerExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_powerExpr; }
	}

	public final PowerExprContext powerExpr() throws RecognitionException {
		PowerExprContext _localctx = new PowerExprContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_powerExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			atom();
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CARET) {
				{
				{
				setState(93);
				match(CARET);
				setState(94);
				atom();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LeftRecursionGrammarParser.ID, 0); }
		public TerminalNode DIGIT() { return getToken(LeftRecursionGrammarParser.DIGIT, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_atom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==DIGIT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 2:
			return leftRecExpr_sempred((LeftRecExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean leftRecExpr_sempred(LeftRecExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 4);
		case 3:
			return precpred(_ctx, 3);
		case 4:
			return precpred(_ctx, 2);
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21i\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\3"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\7\4\62\n\4\f\4\16\4\65\13\4\3\5\3"+
		"\5\3\5\7\5:\n\5\f\5\16\5=\13\5\3\6\3\6\3\6\7\6B\n\6\f\6\16\6E\13\6\3\7"+
		"\3\7\3\7\7\7J\n\7\f\7\16\7M\13\7\3\b\3\b\3\b\7\bR\n\b\f\b\16\bU\13\b\3"+
		"\t\3\t\3\t\7\tZ\n\t\f\t\16\t]\13\t\3\n\3\n\3\n\7\nb\n\n\f\n\16\ne\13\n"+
		"\3\13\3\13\3\13\2\3\6\f\2\4\6\b\n\f\16\20\22\24\2\6\3\2\4\6\3\2\7\b\3"+
		"\2\t\n\3\2\17\20\2j\2\26\3\2\2\2\4\31\3\2\2\2\6\34\3\2\2\2\b\66\3\2\2"+
		"\2\n>\3\2\2\2\fF\3\2\2\2\16N\3\2\2\2\20V\3\2\2\2\22^\3\2\2\2\24f\3\2\2"+
		"\2\26\27\5\6\4\2\27\30\7\2\2\3\30\3\3\2\2\2\31\32\5\b\5\2\32\33\7\2\2"+
		"\3\33\5\3\2\2\2\34\35\b\4\1\2\35\36\5\24\13\2\36\63\3\2\2\2\37 \f\b\2"+
		"\2 !\7\3\2\2!\62\5\6\4\b\"#\f\7\2\2#$\t\2\2\2$\62\5\6\4\b%&\f\6\2\2&\'"+
		"\t\3\2\2\'\62\5\6\4\7()\f\5\2\2)*\t\4\2\2*\62\5\6\4\6+,\f\4\2\2,-\7\13"+
		"\2\2-\62\5\6\4\5./\f\3\2\2/\60\7\f\2\2\60\62\5\6\4\4\61\37\3\2\2\2\61"+
		"\"\3\2\2\2\61%\3\2\2\2\61(\3\2\2\2\61+\3\2\2\2\61.\3\2\2\2\62\65\3\2\2"+
		"\2\63\61\3\2\2\2\63\64\3\2\2\2\64\7\3\2\2\2\65\63\3\2\2\2\66;\5\n\6\2"+
		"\678\7\f\2\28:\5\n\6\29\67\3\2\2\2:=\3\2\2\2;9\3\2\2\2;<\3\2\2\2<\t\3"+
		"\2\2\2=;\3\2\2\2>C\5\f\7\2?@\7\13\2\2@B\5\f\7\2A?\3\2\2\2BE\3\2\2\2CA"+
		"\3\2\2\2CD\3\2\2\2D\13\3\2\2\2EC\3\2\2\2FK\5\16\b\2GH\t\4\2\2HJ\5\16\b"+
		"\2IG\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\r\3\2\2\2MK\3\2\2\2NS\5\20"+
		"\t\2OP\t\3\2\2PR\5\20\t\2QO\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3\2\2\2T\17"+
		"\3\2\2\2US\3\2\2\2V[\5\22\n\2WX\t\2\2\2XZ\5\22\n\2YW\3\2\2\2Z]\3\2\2\2"+
		"[Y\3\2\2\2[\\\3\2\2\2\\\21\3\2\2\2][\3\2\2\2^c\5\24\13\2_`\7\3\2\2`b\5"+
		"\24\13\2a_\3\2\2\2be\3\2\2\2ca\3\2\2\2cd\3\2\2\2d\23\3\2\2\2ec\3\2\2\2"+
		"fg\t\5\2\2g\25\3\2\2\2\n\61\63;CKS[c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}