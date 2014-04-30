/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"block":4,"PUNTO":5,"consts":6,"vars":7,"procedures":8,"statements":9,"CONST":10,"constant":11,"ID":12,"=":13,"NUMBER":14,"PCOMA":15,"COMA":16,"VAR":17,"var":18,"procedure":19,"PROCEDURE":20,"proc_na":21,"nombre":22,"LEFTPAR":23,"args":24,"RIGHTPAR":25,"expressions":26,"term":27,"P":28,"CALL":29,"IF":30,"condition":31,"THEN":32,"ELSE":33,"BEGIN":34,"END":35,"WHILE":36,"DO":37,"+":38,"-":39,"*":40,"/":41,"^":42,"!":43,"%":44,"idnum":45,"ODD":46,"COMPARISON":47,"$accept":0,"$end":1},
terminals_: {2:"error",5:"PUNTO",10:"CONST",12:"ID",13:"=",14:"NUMBER",15:"PCOMA",16:"COMA",17:"VAR",20:"PROCEDURE",23:"LEFTPAR",25:"RIGHTPAR",28:"P",29:"CALL",30:"IF",32:"THEN",33:"ELSE",34:"BEGIN",35:"END",36:"WHILE",37:"DO",38:"+",39:"-",40:"*",41:"/",42:"^",43:"!",44:"%",46:"ODD",47:"COMPARISON"},
productions_: [0,[3,2],[4,4],[6,0],[6,2],[11,4],[11,5],[7,0],[7,2],[18,2],[18,3],[8,0],[8,2],[19,5],[21,4],[22,1],[26,1],[26,3],[9,3],[9,2],[9,5],[9,6],[9,4],[9,4],[9,4],[9,1],[27,3],[27,3],[27,3],[27,3],[27,3],[27,2],[27,2],[27,2],[27,1],[27,1],[24,2],[24,3],[24,0],[45,1],[45,1],[31,4],[31,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
          this.$ = { Type: 'Program', Program: $$[$0-1] }; 
          return [this.$];
        
break;
case 2: this.$ = { Type: 'BLOCK', CONTENT: {CONSTS: $$[$0-3], VARS: $$[$0-2], PROCEDURE: $$[$0-1], STATEMENTS: $$[$0]} }; 
break;
case 3: this.$ = []; 
break;
case 4: this.$ = { Type: $$[$0-1], Constants: [$$[$0]] }; 
break;
case 5: 
		  symbolTable.symbols[$$[$0-3]] = { Type: 'CONST', Value: $$[$0-1] };
		  this.$ = { Type: $$[$0-2], left: {ID: $$[$0-3]}, right: {Value: $$[$0-1]}, declared_in: symbolTable.name  }; 
		
break;
case 6: 
		  symbolTable.symbols[$$[$0-4]] = { Type: 'CONST', Value: $$[$0-2] }; 
		  this.$ = [{ Type: $$[$0-3], left: {ID: $$[$0-4]}, right: {Value: $$[$0-2]}, declared_in: symbolTable.name  }].concat($$[$0]); 
		
break;
case 7: this.$ = []; 
break;
case 8: this.$ = { Type: $$[$0-1], Variables: [$$[$0]] }; 
break;
case 9: 
		  symbolTable.symbols[$$[$0-1]] = {Type: 'VAR'};
		  this.$ = { Variable: $$[$0-1], declared_in: symbolTable.name };  
		
break;
case 10: 
		  symbolTable.symbols[$$[$0-2]] = {Type: 'VAR' }; 
		  this.$ = [{ Variable: $$[$0-2] , declared_in: symbolTable.name}].concat($$[$0]);  
		
break;
case 11: this.$ = []; 
break;
case 12:
		  this.$ = [$$[$0-1]];
		  if($$[$0]) this.$ = this.$.concat($$[$0]);
		
break;
case 13: 
		  this.$ = { Type: $$[$0-4], ID: $$[$0-3][0], Arguments: $$[$0-3][1], Block: $$[$0-1], SymbolTable: symbolTables.pop() };
		  subirAmbito();
		  this.$['declared_in'] = symbolTable.name;
		
break;
case 14:
		  symbolTable.symbols[$$[$0-3]] = { Type: 'PROCEDURE', N_Args: $$[$0-1].length };
		  nuevoAmbito($$[$0-3]);
		  
		  this.$ = [$$[$0-3], $$[$0-1]];
		
break;
case 15: this.$ = $$[$0]; 
break;
case 16: this.$ = (typeof $$[$0] === 'undefined')? [] : [ $$[$0] ]; 
break;
case 17: 
	  this.$ = $$[$0-2];
          if ($$[$0]) this.$.push($$[$0]); 
        
break;
case 18: 
	  encontrarDeclarado($$[$0-2]);
	  noIgualarConst($$[$0-2]);
	  noIgualarProc($$[$0-2]);
	  if($$[$0].Type == 'ID')
		encontrarDeclarado($$[$0].Value);
	  this.$ = { Type: $$[$0-1], left: {ID: $$[$0-2]}, right: {Value :$$[$0]} }; 
	
break;
case 19: this.$ = { Type: $$[$0-1], Identifiers: {ID: $$[$0]} }; 
break;
case 20: 
	  procDeclarado($$[$0-3]);
	  comprobarArgs($$[$0-3], $$[$0-1].length);
	  this.$ = { Type: $$[$0-4], Procedure: {ID: $$[$0-3], Arguments: $$[$0-1]} };
	
break;
case 21: this.$ = { Type: $$[$0-5]+$$[$0-1], left: {Condition: $$[$0-4]}, center: {Statement: $$[$0-2]}, right: {Statement: $$[$0]} }; 
break;
case 22: this.$ = { Type: $$[$0-3], left: {Condition: $$[$0-2]}, right: {Statement: $$[$0]} }; 
break;
case 23: this.$ = { Type: $$[$0-3]+$$[$0], Expressions: {Statement: $$[$0-2]} }; 
break;
case 24: this.$ = { Type: $$[$0-3]+$$[$0-1], left: {Condition: $$[$0-2]}, right: {Statement: $$[$0]} }; 
break;
case 26:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 27:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 28:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 29:
          if ($$[$0] == 0) throw new Error("Division by zero, error!");
          {this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; }
        
break;
case 30:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 31:
          if ($$[$0-1] % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$$[$0-1];
          {this.$ = { Type: $$[$0], left: {term: $$[$0-1]} }; }
        
break;
case 32:this.$ = { Type: $$[$0], left: {term: $$[$0-1]} }; 
break;
case 33:this.$ = { Type: 'UMINUS', right: {term: -$$[$0]} }; 
break;
case 34: this.$ = { Type: 'NUMBER', Value: $$[$0] }; 
break;
case 35: this.$ = { Type: 'ID', Value: $$[$0] }; 
break;
case 36: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 37: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 38: this.$ = []; 
break;
case 39: this.$ = { Type: 'NUMBER', Value: $$[$0] }; 
break;
case 40: this.$ = { Type: 'ID', Value: $$[$0] }; 
break;
case 41: this.$ = { Type: $$[$0-2], right: {ID: $$[$0-1]} }; 
break;
case 42: this.$ = { Type: $$[$0-2], left: {term: $$[$0-3]}, right: {term: $$[$0-1]} }; 
break;
}
},
table: [{3:1,4:2,6:3,10:[1,4],12:[2,3],14:[2,3],17:[2,3],20:[2,3],28:[2,3],29:[2,3],30:[2,3],34:[2,3],36:[2,3],39:[2,3]},{1:[3]},{5:[1,5]},{7:6,12:[2,7],14:[2,7],17:[1,7],20:[2,7],28:[2,7],29:[2,7],30:[2,7],34:[2,7],36:[2,7],39:[2,7]},{11:8,12:[1,9]},{1:[2,1]},{8:10,12:[2,11],14:[2,11],19:11,20:[1,12],28:[2,11],29:[2,11],30:[2,11],34:[2,11],36:[2,11],39:[2,11]},{12:[1,14],18:13},{12:[2,4],14:[2,4],17:[2,4],20:[2,4],28:[2,4],29:[2,4],30:[2,4],34:[2,4],36:[2,4],39:[2,4]},{13:[1,15]},{9:16,12:[1,17],14:[1,25],27:23,28:[1,18],29:[1,19],30:[1,20],34:[1,21],36:[1,22],39:[1,24]},{8:26,12:[2,11],14:[2,11],19:11,20:[1,12],28:[2,11],29:[2,11],30:[2,11],34:[2,11],36:[2,11],39:[2,11]},{12:[1,29],21:27,22:28},{12:[2,8],14:[2,8],20:[2,8],28:[2,8],29:[2,8],30:[2,8],34:[2,8],36:[2,8],39:[2,8]},{15:[1,30],16:[1,31]},{14:[1,32]},{5:[2,2],15:[2,2]},{5:[2,35],13:[1,33],15:[2,35],33:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35]},{12:[1,34]},{12:[1,35]},{23:[1,37],31:36},{9:39,12:[1,17],14:[1,25],26:38,27:23,28:[1,18],29:[1,19],30:[1,20],34:[1,21],36:[1,22],39:[1,24]},{23:[1,37],31:40},{5:[2,25],15:[2,25],33:[2,25],38:[1,41],39:[1,42],40:[1,43],41:[1,44],42:[1,45],43:[1,46],44:[1,47]},{12:[1,49],14:[1,25],27:48,39:[1,24]},{5:[2,34],15:[2,34],33:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34],42:[2,34],43:[2,34],44:[2,34]},{12:[2,12],14:[2,12],28:[2,12],29:[2,12],30:[2,12],34:[2,12],36:[2,12],39:[2,12]},{15:[1,50]},{23:[1,51]},{23:[2,15]},{12:[2,9],14:[2,9],20:[2,9],28:[2,9],29:[2,9],30:[2,9],34:[2,9],36:[2,9],39:[2,9]},{12:[1,14],18:52},{15:[1,53],16:[1,54]},{12:[1,49],14:[1,25],27:55,39:[1,24]},{5:[2,19],15:[2,19],33:[2,19]},{23:[1,56]},{32:[1,57]},{12:[1,61],14:[1,60],45:59,46:[1,58]},{15:[1,62]},{15:[2,16]},{37:[1,63]},{12:[1,49],14:[1,25],27:64,39:[1,24]},{12:[1,49],14:[1,25],27:65,39:[1,24]},{12:[1,49],14:[1,25],27:66,39:[1,24]},{12:[1,49],14:[1,25],27:67,39:[1,24]},{12:[1,49],14:[1,25],27:68,39:[1,24]},{5:[2,31],15:[2,31],33:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31],42:[2,31],43:[2,31],44:[2,31]},{5:[2,32],15:[2,32],33:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32],42:[2,32],43:[2,32],44:[2,32]},{5:[2,33],15:[2,33],33:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[1,46],44:[2,33]},{5:[2,35],15:[2,35],33:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35]},{4:69,6:3,10:[1,4],12:[2,3],14:[2,3],17:[2,3],20:[2,3],28:[2,3],29:[2,3],30:[2,3],34:[2,3],36:[2,3],39:[2,3]},{12:[1,61],14:[1,60],16:[1,72],24:70,25:[2,38],45:71},{12:[2,10],14:[2,10],20:[2,10],28:[2,10],29:[2,10],30:[2,10],34:[2,10],36:[2,10],39:[2,10]},{12:[2,5],14:[2,5],17:[2,5],20:[2,5],28:[2,5],29:[2,5],30:[2,5],34:[2,5],36:[2,5],39:[2,5]},{11:73,12:[1,9]},{5:[2,18],15:[2,18],33:[2,18],38:[1,41],39:[1,42],40:[1,43],41:[1,44],42:[1,45],43:[1,46],44:[1,47]},{12:[1,61],14:[1,60],16:[1,72],24:74,25:[2,38],45:71},{9:75,12:[1,17],14:[1,25],27:23,28:[1,18],29:[1,19],30:[1,20],34:[1,21],36:[1,22],39:[1,24]},{12:[1,76]},{47:[1,77]},{12:[2,39],14:[2,39],16:[2,39],25:[2,39],47:[2,39]},{12:[2,40],14:[2,40],16:[2,40],25:[2,40],47:[2,40]},{9:79,12:[1,17],14:[1,25],27:23,28:[1,18],29:[1,19],30:[1,20],34:[1,21],35:[1,78],36:[1,22],39:[1,24]},{9:80,12:[1,17],14:[1,25],27:23,28:[1,18],29:[1,19],30:[1,20],34:[1,21],36:[1,22],39:[1,24]},{5:[2,26],15:[2,26],33:[2,26],38:[2,26],39:[2,26],40:[1,43],41:[1,44],42:[1,45],43:[1,46],44:[1,47]},{5:[2,27],15:[2,27],33:[2,27],38:[2,27],39:[2,27],40:[1,43],41:[1,44],42:[1,45],43:[1,46],44:[1,47]},{5:[2,28],15:[2,28],33:[2,28],38:[2,28],39:[2,28],40:[2,28],41:[2,28],42:[1,45],43:[1,46],44:[1,47]},{5:[2,29],15:[2,29],33:[2,29],38:[2,29],39:[2,29],40:[2,29],41:[2,29],42:[1,45],43:[1,46],44:[1,47]},{5:[2,30],15:[2,30],33:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30],42:[2,30],43:[1,46],44:[1,47]},{15:[1,81]},{25:[1,82]},{12:[1,61],14:[1,60],16:[1,72],24:83,25:[2,38],45:71},{12:[1,61],14:[1,60],45:84},{12:[2,6],14:[2,6],17:[2,6],20:[2,6],28:[2,6],29:[2,6],30:[2,6],34:[2,6],36:[2,6],39:[2,6]},{25:[1,85]},{5:[2,22],15:[2,22],33:[1,86]},{25:[1,87]},{12:[1,61],14:[1,60],45:88},{5:[2,23],15:[2,23],33:[2,23]},{15:[2,17]},{5:[2,24],15:[2,24],33:[2,24]},{12:[2,13],14:[2,13],20:[2,13],28:[2,13],29:[2,13],30:[2,13],34:[2,13],36:[2,13],39:[2,13]},{15:[2,14]},{25:[2,36]},{12:[1,61],14:[1,60],16:[1,72],24:89,25:[2,38],45:71},{5:[2,20],15:[2,20],33:[2,20]},{9:90,12:[1,17],14:[1,25],27:23,28:[1,18],29:[1,19],30:[1,20],34:[1,21],36:[1,22],39:[1,24]},{32:[2,41],37:[2,41]},{25:[1,91]},{25:[2,37]},{5:[2,21],15:[2,21],33:[2,21]},{32:[2,42],37:[2,42]}],
defaultActions: {5:[2,1],29:[2,15],39:[2,16],79:[2,17],82:[2,14],83:[2,36],89:[2,37]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
 
  var symbolTables = [{ name: 'Global', father: null, symbols: {} }];
  var scope = 0; 
  var symbolTable = symbolTables[scope];
  
  function subirAmbito() {
    scope--;
    symbolTable = symbolTables[scope];
  }
  
  function nuevoAmbito(id) {
    scope++; 
    symbolTables.push({ name: id, father: symbolTable.name, symbols: {} });
    symbolTable = symbolTables[scope];
  }
  
  function procDeclarado(x) {
    var f;
    var s = scope;
    do {
      f = symbolTables[s].symbols[x];
      if(f)
	return;
      s--;
    } while (s >= 0 && !f);
    
    throw "Error! el procedimiento '" + x + "' no ha sido declarado";
  }
  
  function comprobarArgs(x, y) {
    var f
    var s = scope;
    do {
      f = symbolTables[s].symbols[x];
      if(f && f['Type'] == 'PROCEDURE' && symbolTables[s].symbols[x]['N_Args'] != y)
	throw "Error! Los argumentos del procedimiento '" + x + "' son incorrectos";
      s--;
    } while (s >= 0 && !f);
    
    return;
  }
  
  function noIgualarProc(x) {
    var f
    var s = scope;
    do {
      f = symbolTables[s].symbols[x];
      if(f && f['Type'] == 'PROCEDURE')
	throw "Error! Se ha intentado igualar el procedimiento '" + x + "' en el procedimiento: " + symbolTables[s].name;
      s--;
    } while (s >= 0 && !f);
    
    return;
  }
  
  function noIgualarConst(x) {
    var f
    var s = scope;
    do {
      f = symbolTables[s].symbols[x];
      if(f && f['Type'] == 'CONST')
	throw "Error! Se ha intentado igualar la constante '" + x + "' en el procedimiento: " + symbolTables[s].name;
      s--;
    } while (s >= 0 && !f);
    
    return;
  }
  
  function encontrarDeclarado(x) {
    var f;
    var s = scope;
    do {
      f = symbolTables[s].symbols[x];
      if(f)
	return;
      s--;
    } while (s >= 0 && !f);
    
    throw "Error! variable o constante '" + x + "' no declarada";
  }
/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            if (this.options.backtrack_lexer) {
                delete backup;
            }
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        if (this.options.backtrack_lexer) {
            delete backup;
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ IF: 'IF', THEN: 'THEN', ELSE: 'ELSE', WHILE: 'WHILE', DO: 'DO', P: 'P', CALL: 'CALL', BEGIN: 'BEGIN', END: 'END', ODD: 'ODD', PROCEDURE: 'PROCEDURE', CONST: 'CONST', VAR: 'VAR'}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 14
break;
case 2:return 15
break;
case 3:return 16
break;
case 4:return 47
break;
case 5:return 23
break;
case 6:return 25
break;
case 7:return idORrw(yy_.yytext)
break;
case 8:return yy_.yytext;
break;
case 9:return 'EOF'
break;
case 10:return 5
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:;)/,/^(?:,)/,/^(?:[<>!=]=|[<>])/,/^(?:\()/,/^(?:\))/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[-*/+^!%=();])/,/^(?:$)/,/^(?:\.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}