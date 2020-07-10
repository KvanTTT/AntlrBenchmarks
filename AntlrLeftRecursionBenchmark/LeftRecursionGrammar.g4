grammar LeftRecursionGrammar;

leftRecExprRoot
    : leftRecExpr EOF
    ;

notLeftRecExprRoot
    : notLeftRecExpr EOF
    ;

leftRecExpr
    : atom

    | <assoc=right> leftRecExpr '^' leftRecExpr
    | leftRecExpr ('*' | '/' | '%') leftRecExpr
    | leftRecExpr ('+' | '-') leftRecExpr

    | leftRecExpr ('==' | '!=') leftRecExpr
    | leftRecExpr '&&' leftRecExpr
    | leftRecExpr '||' leftRecExpr
    ;

notLeftRecExpr
    : logicalAndExpr ('||' logicalAndExpr)*
    ;

logicalAndExpr
    : equalExpr ('&&' equalExpr)*
    ;

equalExpr
    : addExpr (('==' | '!=') addExpr)*
    ;

addExpr
    : multExpr (('+' | '-') multExpr)*
    ;

multExpr
    : powerExpr (('*' | '/' | '%') powerExpr)*
    ;

powerExpr
    : atom ('^' atom)*
    ;

atom
    : ID
    | DIGIT
    ;


CARET:       '^';
STAR :       '*';
SLASH:       '/';
PERCENT:     '%';
PLUS:        '+';
MINUS:       '-';
EQUAL:       '==';
NOT_EQUAL:   '!=';
LOGICAL_AND: '&&';
LOGICAL_OR:  '||';
QUESTION:    '?';
COLON:       ':';

ID:          [a-zA-Z_][a-zA-Z0-9_]*;
DIGIT:       [0-9]+;
WS:          [ \t\r\n] -> channel(HIDDEN);
