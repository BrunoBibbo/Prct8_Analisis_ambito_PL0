
%token NUMBER ID COMPARISON PUNTO COMA PCOMA IF THEN ELSE WHILE DO P CALL BEGIN END ODD PROCEDURE CONST VAR
/* Asociacion de operadores y precedencia (de menor a mayor) */

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
		{ $$ = { Type: $2, left: {ID: $1}, right: {Value: $3} }; }
    | ID '=' NUMBER COMA constant
		{ $$ = [{ Type: $2, left: {ID: $1}, right: {Value: $3} }].concat($5); } 
    ;
    
vars
    : /* empty */
		{ $$ = []; }
    | VAR var
		{ $$ = { Type: $1, Variables: [$2] }; }
    ;
    
var
    : ID PCOMA
		{ $$ = { Variable: $1 }; }
    | ID COMA var
		{ $$ = [{ Variable: $1 }].concat($3); }
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
    : PROCEDURE nombre proc_na PCOMA block PCOMA procedure
		{ $$ = { Type: $1, ID: $2, Arguments: $4, Block: $7 }; }
    ;

proc_na
    : LEFTPAR args RIGHTPAR
		{
		  symbolTable.symbols[$1] = { Type: 'PROCEDURE', N_Args: $3.length };
		  nuevoAmbito($1);
		  
		  for (i = 0; i < $3.length; i++)
		    symbolTable.symbols[$3[i].Value] = { Type: 'VAR_ARG' };
		    
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
        { $$ = { Type: $2, left: {ID: $1}, right: {Value :$3} }; }
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