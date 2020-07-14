package main

import (
	"bytes"
	"fmt"
	"github.com/antlr/antlr4/runtime/Go/antlr"
	"reflect"
	"runtime"
	"time"
)

const TermsCount = 128
const WarmUpCount = 4
const IterationCount = 64

var tokensStream *antlr.CommonTokenStream
var predictionMode string

func main() {
	data := generateData()

	codeStream := antlr.NewInputStream(data)
	lexer := NewLeftRecursionGrammarLexer(codeStream)
	tokensStream = antlr.NewCommonTokenStream(lexer, 0)

	predictionMode = "SLL"
	sllLeftRecursion := benchmarkAverage(leftRecursionTest, "SLL")
	sllNotLeftRecursion := benchmarkAverage(notLeftRecursionTest, "SLL")

	predictionMode = "LL"
	llLeftRecursion := benchmarkAverage(leftRecursionTest, "LL")
	llNotLeftRecursion := benchmarkAverage(notLeftRecursionTest, "LL")

	fmt.Printf("SLL:\n")
	fmt.Printf("left recursion: %d us\n", sllLeftRecursion)
	fmt.Printf("not left recursion: %d us\n", sllNotLeftRecursion)
	fmt.Printf("ratio: %.2f\n", float64(sllNotLeftRecursion) / float64(sllLeftRecursion))

	fmt.Printf("\n")

	fmt.Printf("LL:\n")
	fmt.Printf("left recursion: %d us\n", llLeftRecursion)
	fmt.Printf("not left recursion: %d us\n", llNotLeftRecursion)
	fmt.Printf("ratio: %.2f\n", float64(llNotLeftRecursion) / float64(llLeftRecursion))
}


func generateData() string {
	var buffer bytes.Buffer

	term := "x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5"

	for i := 0; i < TermsCount; i++ {
		buffer.WriteString(term)
		if i < TermsCount - 1 {
			buffer.WriteString(" || ")
		}
	}

	return buffer.String()
}

func benchmarkAverage(f func() antlr.ParserRuleContext, comment string) int64 {
	fmt.Printf("function %s (%s):\n", GetFunctionName(f), comment)

	fmt.Printf("warm up...\n")
	for i := 0; i < WarmUpCount; i++ {
		f()
	}
	fmt.Printf("warm up completed.\n")

	fmt.Printf("benchmark...\n")

	start := time.Now()
	for i := 0; i < IterationCount; i++ {
		f()
	}
	elapsed := time.Since(start)
	fmt.Printf("benchmark completed.\n")

	fmt.Printf("\n")

	return elapsed.Nanoseconds() / IterationCount / 1000 // return result in microseconds
}

func GetFunctionName(i interface{}) string {
	return runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()
}

func leftRecursionTest() antlr.ParserRuleContext {
	return createParser().LeftRecExprRoot()
}

func notLeftRecursionTest() antlr.ParserRuleContext {
	return createParser().NotLeftRecExprRoot()
}

func createParser() *LeftRecursionGrammarParser {
	tokensStream.Seek(0)
	parser := NewLeftRecursionGrammarParser(tokensStream)
	parser.BuildParseTrees = false
	var mode int
	if predictionMode == "SLL" {
		mode = antlr.PredictionModeSLL
	} else {
		mode = antlr.PredictionModeLL
	}
	parser.Interpreter.SetPredictionMode(mode)
	return parser
}