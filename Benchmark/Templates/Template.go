package main

import (
	"fmt"
	"io/ioutil"
	"time"

	"github.com/antlr/antlr4/runtime/Go/antlr"
)

const WarmUpCount = 32
const IterationCount = 128

var tokensStream *antlr.CommonTokenStream
var predictionMode string

func main() {
	bytes, err := ioutil.ReadFile("default_input_file")
	if err != nil {
		fmt.Print(err)
	}

	data := string(bytes)
	codeStream := antlr.NewInputStream(data)
	lexer := New__TemplateGrammarName__Lexer(codeStream)
	tokensStream = antlr.NewCommonTokenStream(lexer, 0)

	predictionMode = "SLL"

	benchmark(true, WarmUpCount)
	time := benchmark(false, IterationCount)

	timeStr := fmt.Sprint(time)
	ioutil.WriteFile("__TemplateGrammarName_____RuntimeName__.benchmark", []byte(timeStr), 0644)
}

func benchmark(warmUp bool, iterationCount int) int64 {
	var str string
	if warmUp {
		str = "warming up..."
	} else {
		str = "benchmarking..."
	}

	fmt.Println(str)
	start := time.Now()
	for i := 0; i < iterationCount; i++ {
		__TemplateGrammarName_____RuntimeName__()
	}
	elapsed := time.Since(start)

	elapsedNs := elapsed.Nanoseconds() / int64(iterationCount)

	if warmUp {
		str = "warming up:"
	} else {
		str = "__TemplateGrammarName_____RuntimeName__:"
	}

	fmt.Printf("%s %d us\n", str, elapsedNs/int64(1000))

	return elapsedNs
}

func __TemplateGrammarName_____RuntimeName__() antlr.ParserRuleContext {
	tokensStream.Seek(0)
	parser := New__TemplateGrammarName__Parser(tokensStream)
	parser.BuildParseTrees = false
	var mode int
	if predictionMode == "SLL" {
		mode = antlr.PredictionModeSLL
	} else {
		mode = antlr.PredictionModeLL
	}
	parser.Interpreter.SetPredictionMode(mode)
	return parser.Root()
}
