lexer grammar CaseInsensitiveLexer;

WORD: 'abcdefghijklmnopqrstuvwxyz';
WS: [ \t\r\n]+ -> channel(HIDDEN);