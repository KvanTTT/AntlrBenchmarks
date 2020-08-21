<?php

require_once '__RootPath__/Php/vendor/autoload.php';
require_once '__TemplateGrammarName__Lexer.php';
require_once '__TemplateGrammarName__Parser.php';

use Antlr\Antlr4\Runtime\CommonTokenStream;
use Antlr\Antlr4\Runtime\InputStream;
use Antlr\Antlr4\Runtime\Error\Listeners\ConsoleErrorListener;
use Antlr\Antlr4\Runtime\Atn\PredictionMode as PredictionMode;
use AntlrBenchmarks\__TemplateGrammarName__Lexer as __TemplateGrammarName__Lexer;
use AntlrBenchmarks\__TemplateGrammarName__Parser as __TemplateGrammarName__Parser;

$input = InputStream::fromPath("default_input_file");
$lexer = new __TemplateGrammarName__Lexer($input);
$consoleErrorListener = new ConsoleErrorListener();
$lexer->addErrorListener($consoleErrorListener);
$tokenStream = new CommonTokenStream($lexer);

$bench = new __TemplateGrammarName__Bench();
$bench->bench__TemplateGrammarName_____RuntimeName__();

class __TemplateGrammarName__Bench
{
    /**
     * @Revs(16)
     * @Iterations(2)
     */
    public function bench__TemplateGrammarName_____RuntimeName__()
    {
        global $tokenStream, $consoleErrorListener;
        $tokenStream->seek(0);
        $parser = new __TemplateGrammarName__Parser($tokenStream);
        $parser->addErrorListener($consoleErrorListener);
        $parser->setBuildParseTree(False);
        $parser->getInterpreter()->setPredictionMode(PredictionMode::SLL);
        return $parser->root();
    }
}