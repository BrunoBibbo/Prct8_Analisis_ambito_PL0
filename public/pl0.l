/* lexical grammar */
%{
var reserved_words ={ IF: 'IF', THEN: 'THEN', ELSE: 'ELSE', WHILE: 'WHILE', DO: 'DO', P: 'P', CALL: 'CALL', BEGIN: 'BEGIN', END: 'END', ODD: 'ODD', PROCEDURE: 'PROCEDURE', CONST: 'CONST', VAR: 'VAR'}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}

%}
%%

\s+|\#.*                         /* skip whitespace and comments */
\b\d+("."\d*)?([eE][-+]?\d+)?\b  return 'NUMBER'
";"				  return 'PCOMA'
","				  return 'COMA'
[<>!=]'='|[<>]			  return 'COMPARISON'
"("				  return 'LEFTPAR'
")"				  return 'RIGHTPAR'
\b[A-Za-z_]\w*\b                 return idORrw(yytext)
[-*/+^!%=();]                    return yytext;
<<EOF>>                          return 'EOF'
"."             	          return 'PUNTO'
