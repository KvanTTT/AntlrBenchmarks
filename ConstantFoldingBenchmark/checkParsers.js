import antlr4 from 'antlr4';
import PLexer from './PLexer.js'
import PParserNoConstFolding from './PParserNoConstFolding.js';
import PParserConstFolding from './PParserConstFolding.js';

const warmUpCount = 4
const iterationCount = 128

let data = "T0 T1 T2 T3 T4 T5 T6 T7 T8 T9 T10 T11 T12 T13 T14 T15 T16 T17 T18 T19 T20 T21 T22 T23 T24 T25 T26 T27 T28 T29 T30 T31 T32 T33 T34 T35 T36 T37 T38 T39 T40 T41 T42 T43 T44 T45 T46 T47 T48 T49 T50 T51 T52 T53 T54 T55 T56 T57 T58 T59 T60 T61 T62 T63";
let chars = new antlr4.InputStream(data);
let lexer = new PLexer(chars);
let tokensStream = new antlr4.CommonTokenStream(lexer);

let no_const_folding = benchmarkAverage(no_const_folding_test);
let const_folding = benchmarkAverage(const_folding_test);

console.log(`no_const_folding_test: ${no_const_folding} ns`)
console.log(`const_folding_test: ${const_folding} ns`)
console.log(`ratio: ${(const_folding / no_const_folding).toFixed(4)}`)

function benchmarkAverage(func) {
    console.log(`function ${func.name}:`)

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
    let elapsedNs = Math.round((elapsed[0] * 1e6 + elapsed[1] / 1e3) / iterationCount);

    console.log("benchmark completed.")
    console.log("")

    return elapsedNs * 1000;
}


function no_const_folding_test() {
    tokensStream.reset();
    let parser = new PParserNoConstFolding(tokensStream);
    parser.buildParseTrees = false;
    return parser.r();
}

function const_folding_test() {
    tokensStream.reset();
    let parser = new PParserConstFolding(tokensStream);
    parser.buildParseTrees = false;
    return parser.r();
}
