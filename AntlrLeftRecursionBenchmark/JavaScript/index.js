let antlr4 = require('antlr4/index');
let PredictionMode = require('antlr4/atn/PredictionMode').PredictionMode;
let LeftRecursionGrammarLexer = require('./LeftRecursionGrammarLexer').LeftRecursionGrammarLexer;
let LeftRecursionGrammarParser = require('./LeftRecursionGrammarParser').LeftRecursionGrammarParser;

const termsCount = 128
const warmUpCount = 4
const iterationCount = 64

let predictionMode = "LL"

let data = generateData();
let chars = new antlr4.InputStream(data);
let lexer = new LeftRecursionGrammarLexer(chars);
let tokensStream = new antlr4.CommonTokenStream(lexer);

predictionMode = "SLL"
sllLeftRecursion = benchmarkAverage(left_recursion_test, "SLL");
sllNotLeftRecursion = benchmarkAverage(not_left_recursion_test, "SLL");

predictionMode = "LL"
llLeftRecursion = benchmarkAverage(left_recursion_test, "LL");
llNotLeftRecursion = benchmarkAverage(not_left_recursion_test, "LL");

console.log("SLL:")
console.log(`left recursion: ${sllLeftRecursion} us`)
console.log(`not left recursion: ${sllNotLeftRecursion} us`)
console.log(`ratio: ${(sllNotLeftRecursion / sllLeftRecursion).toFixed(2)}`)

console.log("")

console.log("LL:")
console.log(`left recursion: ${llLeftRecursion} us`)
console.log(`not left recursion: ${llNotLeftRecursion} us`)
console.log(`ratio: ${(llNotLeftRecursion / llLeftRecursion).toFixed(2)}`)


function generateData() {
    let result = "";
    let term = "x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5";

    for (let i = 0; i < termsCount; i++) {
        result += term
        if (i < termsCount - 1)
            result += " || ";
    }

    return result;
}


function benchmarkAverage(func, comment) {
    console.log(`function ${func.name} (${comment}):`)

    console.log("warm up...")
    for (let i = 0; i < warmUpCount; i++) {
        func();
    }
    console.log("warm up completed.")

    console.log("benchmark...")

    let startTime = process.hrtime();

    for (let i = 0; i < iterationCount; i++) {
        func();
    }

    let elapsed = process.hrtime(startTime);
    let elapsedUs = Math.round((elapsed[0] * 1e6 + elapsed[1] / 1e3) / iterationCount);

    console.log("benchmark completed.")
    console.log("")

    return elapsedUs; // result in microseconds
}


function left_recursion_test() {
    return createParser().leftRecExprRoot()
}

function not_left_recursion_test() {
    return createParser().notLeftRecExprRoot()
}

function createParser() {
    tokensStream.reset();
    let parser = new LeftRecursionGrammarParser(tokensStream);
    parser.buildParseTrees = false;
    parser._interp.predictionMode = predictionMode === "LL" ? PredictionMode.LL : PredictionMode.SLL;
    return parser;
}



