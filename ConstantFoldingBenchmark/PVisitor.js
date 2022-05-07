// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PParser.

export default class PVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PParser#r.
	visitR(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PParser#t.
	visitT(ctx) {
	  return this.visitChildren(ctx);
	}



}
