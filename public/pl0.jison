
%token NUMBER ID COMPARISON PUNTO COMA PCOMA IF THEN ELSE WHILE DO P CALL BEGIN END ODD PROCEDURE CONST VAR
/* Asociacion de operadores y precedencia (de menor a mayor) */

%{ 
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
%}

%right THEN ELSE
%right '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '%'
%left UMINUS
%left '!'

%start prog

%% /* language grammar */
prog
    : block PUNTO
        { 
          $$ = { Type: 'Program', Program: $1 }; 
          return [$$];
        }
    ;

block
    : consts vars procedures statements
		{ $$ = { Type: 'BLOCK', CONTENT: {CONSTS: $1, VARS: $2, PROCEDURE: $3, STATEMENTS: $4} }; }
    ;
    
consts
    : /* empty */
		{ $$ = []; }
    | CONST constant
		{ $$ = { Type: $1, Constants: [$2] }; }
    ;
    
constant
    : ID '=' NUMBER PCOMA
		{ 
		  symbolTable.symbols[$1] = { Type: 'CONST', Value: $3 };
		  $$ = { Type: $2, left: {ID: $1}, right: {Value: $3}, declared_in: symbolTable.name  }; 
		}
    | ID '=' NUMBER COMA constant
		{ 
		  symbolTable.symbols[$1] = { Type: 'CONST', Value: $3 }; 
		  $$ = [{ Type: $2, left: {ID: $1}, right: {Value: $3}, declared_in: symbolTable.name  }].concat($5); 
		} 
    ;
    
vars
    : /* empty */
		{ $$ = []; }
    | VAR var
		{ $$ = { Type: $1, Variables: [$2] }; }
    ;
    
var
    : ID PCOMA
		{ 
		  symbolTable.symbols[$1] = {Type: 'VAR'};
		  $$ = { Variable: $1, declared_in: symbolTable.name };  
		}
    | ID COMA var
		{ 
		  symbolTable.symbols[$1] = {Type: 'VAR' }; 
		  $$ = [{ Variable: $1 , declared_in: symbolTable.name}].concat($3);  
		}
    ;

procedures
    : /* empty */
		{ $$ = []; }
    | procedure procedures
		{
		  $$ = [$1];
		  if($2) $$ = $$.concat($2);
		}
    ;
    
procedure
    : PROCEDURE proc_na PCOMA block PCOMA
		{ 
		  $$ = { Type: $1, ID: $2[0], Arguments: $2[1], Block: $4, SymbolTable: symbolTables.pop() };
		  subirAmbito();
		  $$['declared_in'] = symbolTable.name;
		}
    ;

proc_na
    : nombre LEFTPAR args RIGHTPAR
		{
		  symbolTable.symbols[$1] = { Type: 'PROCEDURE', N_Args: $3.length };
		  nuevoAmbito($1);
		  
		  $$ = [$1, $3];
		}
    ;
    
nombre
    : ID
	{ $$ = $1; }
    ;
    
expressions
    : statements  
        { $$ = (typeof $1 === 'undefined')? [] : [ $1 ]; }
    | expressions PCOMA statements
        { 
	  $$ = $1;
          if ($3) $$.push($3); 
        }
    ;

statements
    : ID '=' term
        { 
	  encontrarDeclarado($1);
	  noIgualarConst($1);
	  noIgualarProc($1);
	  if($3.Type == 'ID')
		encontrarDeclarado($3.Value);
	  $$ = { Type: $2, left: {ID: $1}, right: {Value :$3} }; 
	}
    | P ID
        { $$ = { Type: $1, Identifiers: {ID: $2} }; }
    | CALL ID LEFTPAR args RIGHTPAR
	{ 
	  if($4)
	    $$ = { Type: $1, Procedure: {ID: $2, Arguments: $4} };
	  else
	    $$ = { Type: $1, Procedure: {ID: $2} }; 
	}
    | IF condition THEN statements ELSE statements
		{ $$ = { Type: $1+$5, left: {Condition: $2}, center: {Statement: $4}, right: {Statement: $6} }; }
    | IF condition THEN statements
		{ $$ = { Type: $1, left: {Condition: $2}, right: {Statement: $4} }; }
    | BEGIN expressions PCOMA END
		{ $$ = { Type: $1+$4, Expressions: {Statement: $2} }; }
    | WHILE condition DO statements
		{ $$ = { Type: $1+$3, left: {Condition: $2}, right: {Statement: $4} }; }
    | term
    ;

term
    : term '+' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '-' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '*' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '/' term
        {
          if ($3 == 0) throw new Error("Division by zero, error!");
          {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
        }
    | term '^' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '!'
        {
          if ($1 % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$1;
          {$$ = { Type: $2, left: {term: $1} }; }
        }
    | term '%'
        {$$ = { Type: $2, left: {term: $1} }; }
    | '-' term %prec UMINUS
        {$$ = { Type: 'UMINUS', right: {term: -$2} }; }
    | NUMBER
        { $$ = { Type: 'NUMBER', Value: $1 }; }
    | ID 
        { $$ = { Type: 'ID', Value: $1 }; }
    ;
    
args
    : idnum args
		{ $$ = [$1].concat($2); }
    | COMA idnum args
		{ $$ = [$2].concat($3); }
    | /* empty */
		{ $$ = []; }
    ;
    
idnum
    : NUMBER
		{ $$ = { Type: 'NUMBER', Value: $1 }; }
    | ID
		{ $$ = { Type: 'ID', Value: $1 }; }
    ;
    
condition
    : LEFTPAR ODD ID RIGHTPAR
		{ $$ = { Type: $2, right: {ID: $3} }; }
    | LEFTPAR idnum COMPARISON idnum RIGHTPAR
		{ $$ = { Type: $3, left: {term: $2}, right: {term: $4} }; }
    ;