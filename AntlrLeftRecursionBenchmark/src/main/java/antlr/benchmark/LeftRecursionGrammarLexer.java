package antlr.benchmark;

import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LeftRecursionGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CARET=1, STAR=2, SLASH=3, PERCENT=4, PLUS=5, MINUS=6, EQUAL=7, NOT_EQUAL=8,
		LOGICAL_AND=9, LOGICAL_OR=10, QUESTION=11, COLON=12, ID=13, DIGIT=14,
		WS=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CARET", "STAR", "SLASH", "PERCENT", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL",
			"LOGICAL_AND", "LOGICAL_OR", "QUESTION", "COLON", "ID", "DIGIT", "WS"
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


	public LeftRecursionGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LeftRecursionGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\21M\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\3\4"+
		"\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\7\16@\n\16\f\16\16\16C\13\16\3\17"+
		"\6\17F\n\17\r\17\16\17G\3\20\3\20\3\20\3\20\2\2\21\3\3\5\4\7\5\t\6\13"+
		"\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21\3\2\6\5\2C\\"+
		"aac|\6\2\62;C\\aac|\3\2\62;\5\2\13\f\17\17\"\"\2N\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\3!\3\2\2\2\5#\3\2\2\2\7%\3\2\2\2\t\'\3"+
		"\2\2\2\13)\3\2\2\2\r+\3\2\2\2\17-\3\2\2\2\21\60\3\2\2\2\23\63\3\2\2\2"+
		"\25\66\3\2\2\2\279\3\2\2\2\31;\3\2\2\2\33=\3\2\2\2\35E\3\2\2\2\37I\3\2"+
		"\2\2!\"\7`\2\2\"\4\3\2\2\2#$\7,\2\2$\6\3\2\2\2%&\7\61\2\2&\b\3\2\2\2\'"+
		"(\7\'\2\2(\n\3\2\2\2)*\7-\2\2*\f\3\2\2\2+,\7/\2\2,\16\3\2\2\2-.\7?\2\2"+
		"./\7?\2\2/\20\3\2\2\2\60\61\7#\2\2\61\62\7?\2\2\62\22\3\2\2\2\63\64\7"+
		"(\2\2\64\65\7(\2\2\65\24\3\2\2\2\66\67\7~\2\2\678\7~\2\28\26\3\2\2\29"+
		":\7A\2\2:\30\3\2\2\2;<\7<\2\2<\32\3\2\2\2=A\t\2\2\2>@\t\3\2\2?>\3\2\2"+
		"\2@C\3\2\2\2A?\3\2\2\2AB\3\2\2\2B\34\3\2\2\2CA\3\2\2\2DF\t\4\2\2ED\3\2"+
		"\2\2FG\3\2\2\2GE\3\2\2\2GH\3\2\2\2H\36\3\2\2\2IJ\t\5\2\2JK\3\2\2\2KL\b"+
		"\20\2\2L \3\2\2\2\5\2AG\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}