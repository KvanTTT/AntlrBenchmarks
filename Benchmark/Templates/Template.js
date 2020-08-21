let fs = require("fs");
let antlr4 = require('antlr4/index');
let PredictionMode = require('antlr4/atn/PredictionMode').PredictionMode;
let __TemplateGrammarName__Lexer = require('./__TemplateGrammarName__Lexer').__TemplateGrammarName__Lexer;
let __TemplateGrammarName__Parser = require('./__TemplateGrammarName__Parser').__TemplateGrammarName__Parser;

const warmUpCount = 32;
const iterationCount = 128;

let inputFileName = "default_input_file"
let mode = "sll";
let buildParseTrees = false

let argv = process.argv;
if (argv.length > 2) {
    inputFileName = argv[2];
    if (argv.length > 3) {
        mode = argv[3].toLowerCase();
        if (argv.length > 4) {
            buildParseTrees = argv[4].toLowerCase() == "true"
        }
    }
}

let data = fs.readFileSync(inputFileName).toString();
let chars = new antlr4.InputStream(data);
let lexer = new __TemplateGrammarName__Lexer(chars);
let tokenStream = new antlr4.CommonTokenStream(lexer);

Benchmark(true, warmUpCount)
let time = Benchmark(false, iterationCount)

fs.writeFileSync("__TemplateGrammarName_____RuntimeName__.benchmark", time);

function Benchmark(warmUp, iterationCount) {
    console.log(warmUp ? "warming up..." : "benchmarking...");
    let startTime = process.hrtime.bigint();
    for (let i = 0; i < iterationCount; i++) {
        __TemplateGrammarName_____RuntimeName__();
    }
    let stopTime = process.hrtime.bigint();
    let time = (stopTime - startTime) / BigInt(iterationCount);
    console.log((warmUp ? "warming up: " : "__TemplateGrammarName_____RuntimeName__: ") + (time / 1000n) + " us");
    return time;
}

function __TemplateGrammarName_____RuntimeName__() {
    tokenStream.reset();
    let parser = new __TemplateGrammarName__Parser(tokenStream);
    parser.buildParseTrees = buildParseTrees;
    parser._interp.predictionMode = mode === "sll" ? PredictionMode.SLL : PredictionMode.LL;
    return parser.root();
}