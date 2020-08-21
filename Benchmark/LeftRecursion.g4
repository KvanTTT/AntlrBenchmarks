grammar LeftRecursion;

root
    : leftRecExpr EOF
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
