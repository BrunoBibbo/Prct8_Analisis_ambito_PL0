var assert = chai.assert;
 
 suite('Operaciones aritméticas', function() {
    
  test('Suma: ', function(){  
    var input = pl0.parse("VAR a; a = 5 + 8 + 2.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"+","left":{"term":{"Type":"NUMBER","Value":"5"}},"right":{"term":{"Type":"NUMBER","Value":"8"}}}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}}}}}}]', JSON.stringify(input));
  });

  test('Resta: ', function(){  
    var input = pl0.parse("VAR a; a = 7 - 2 - 5.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"-","left":{"term":{"Type":"-","left":{"term":{"Type":"NUMBER","Value":"7"}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}},"right":{"term":{"Type":"NUMBER","Value":"5"}}}}}}}}]', JSON.stringify(input));
  });

  test('Multiplicación: ', function(){  
    var input = pl0.parse("VAR a; a = 8 * 2 * 5.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"*","left":{"term":{"Type":"*","left":{"term":{"Type":"NUMBER","Value":"8"}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}},"right":{"term":{"Type":"NUMBER","Value":"5"}}}}}}}}]', JSON.stringify(input));
  });

  test('División: ', function(){  
    var input = pl0.parse("VAR a; a = 5 / 7 / 3.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"/","left":{"term":{"Type":"/","left":{"term":{"Type":"NUMBER","Value":"5"}},"right":{"term":{"Type":"NUMBER","Value":"7"}}}},"right":{"term":{"Type":"NUMBER","Value":"3"}}}}}}}}]', JSON.stringify(input));
  });

  test('División - Preferencia de operadores: ', function(){  
    var input = pl0.parse("VAR a; a = 4 + 2 / 2.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"NUMBER","Value":"4"}},"right":{"term":{"Type":"/","left":{"term":{"Type":"NUMBER","Value":"2"}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}}}}}}}}]', JSON.stringify(input));
  });

  test('Multiplicación - Preferencia de operador: ', function(){  
    var input = pl0.parse("VAR a; a = 7 - 1 * 5.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"-","left":{"term":{"Type":"NUMBER","Value":"7"}},"right":{"term":{"Type":"*","left":{"term":{"Type":"NUMBER","Value":"1"}},"right":{"term":{"Type":"NUMBER","Value":"5"}}}}}}}}}}]', JSON.stringify(input));
  });
  
 });

 suite('Pruebas de statement', function() {
  
  test('If: ', function(){  
    var input = pl0.parse("VAR a; IF (a > 0) THEN a = 20.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"IF","left":{"Condition":{"Type":">","left":{"term":{"Type":"ID","Value":"a"}},"right":{"term":{"Type":"NUMBER","Value":"0"}}}},"right":{"Statement":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"20"}}}}}}}}]', JSON.stringify(input));
  });
  
  test('If - Else: ', function(){  
    var input = pl0.parse("VAR a; IF (a > 0) THEN a = 20 ELSE a = 50.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"a","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"IFELSE","left":{"Condition":{"Type":">","left":{"term":{"Type":"ID","Value":"a"}},"right":{"term":{"Type":"NUMBER","Value":"0"}}}},"center":{"Statement":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"20"}}}},"right":{"Statement":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"50"}}}}}}}}]', JSON.stringify(input));
  });
  
  test('While - Do: ', function(){  
    var input = pl0.parse("VAR b; WHILE (b > 0) DO b = b+1.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"b","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"WHILEDO","left":{"Condition":{"Type":">","left":{"term":{"Type":"ID","Value":"b"}},"right":{"term":{"Type":"NUMBER","Value":"0"}}}},"right":{"Statement":{"Type":"=","left":{"ID":"b"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"ID","Value":"b"}},"right":{"term":{"Type":"NUMBER","Value":"1"}}}}}}}}}}]', JSON.stringify(input));
  });
  
 });

 suite('Pruebas de expressions', function() {
 
  test('Varios statements (Begin - End): ', function(){  
    var input = pl0.parse("VAR x, y; PROCEDURE multiply(); CALL multiply(); x = 24. y = 12.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[[{"Variable":"x","declared_in":"Global"},{"Variable":"y","declared_in":"Global"}]]},"PROCEDURE":[{"Type":"PROCEDURE","ID":"multiply","Arguments":[],"Block":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":[],"PROCEDURE":[],"STATEMENTS":{"Type":"CALL","Procedure":{"ID":"multiply","Arguments":[]}}}},"SymbolTable":{"name":"multiply","father":"Global","symbols":{}},"declared_in":"Global"}],"STATEMENTS":{"Type":"=","left":{"ID":"x"},"right":{"Value":{"Type":"NUMBER","Value":"24"}}}}}}]', JSON.stringify(input));
  });
  
 });
 
 suite('Pruebas de block', function() {
 
  test('Const: ', function(){  
    var input = pl0.parse("CONST a =  7; VAR b; b = 4. BEGIN IF (b == 4) THEN b = b + a; END;");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":{"Type":"CONST","Constants":[{"Type":"=","left":{"ID":"a"},"right":{"Value":"7"},"declared_in":"Global"}]},"VARS":{"Type":"VAR","Variables":[{"Variable":"b","declared_in":"Global"}]},"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"b"},"right":{"Value":{"Type":"NUMBER","Value":"4"}}}}}}]', JSON.stringify(input));
  });
  
  test('Procedure - Sin argumentos: ', function(){  
    var input = pl0.parse("VAR b; PROCEDURE a(); b = 5; CALL a().");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[{"Variable":"b","declared_in":"Global"}]},"PROCEDURE":[{"Type":"PROCEDURE","ID":"a","Arguments":[],"Block":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":[],"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"b"},"right":{"Value":{"Type":"NUMBER","Value":"5"}}}}},"SymbolTable":{"name":"a","father":"Global","symbols":{}},"declared_in":"Global"}],"STATEMENTS":{"Type":"CALL","Procedure":{"ID":"a","Arguments":[]}}}}}]', JSON.stringify(input));
  });
  
  test('Procedure - Con argumentos: ', function(){  
    var input = pl0.parse("VAR b, c, d, e; PROCEDURE a(c, d, e); b = 5; CALL a(c, d, e).");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":{"Type":"VAR","Variables":[[{"Variable":"b","declared_in":"Global"},{"Variable":"c","declared_in":"Global"},{"Variable":"d","declared_in":"Global"},{"Variable":"e","declared_in":"Global"}]]},"PROCEDURE":[{"Type":"PROCEDURE","ID":"a","Arguments":[{"Type":"ID","Value":"c"},{"Type":"ID","Value":"d"},{"Type":"ID","Value":"e"}],"Block":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":[],"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"b"},"right":{"Value":{"Type":"NUMBER","Value":"5"}}}}},"SymbolTable":{"name":"a","father":"Global","symbols":{"c":{"Type":"VAR_ARG"},"d":{"Type":"VAR_ARG"},"e":{"Type":"VAR_ARG"}}},"declared_in":"Global"}],"STATEMENTS":{"Type":"CALL","Procedure":{"ID":"a","Arguments":[{"Type":"ID","Value":"c"},{"Type":"ID","Value":"d"},{"Type":"ID","Value":"e"}]}}}}}]', JSON.stringify(input));
  });
  
 });
 
 suite('Pruebas de prog', function() {
 
  test('Programa de prueba: ', function(){  
    var input = pl0.parse("CONST a = 0, b = 3; VAR c, d, e, z; PROCEDURE alfa(a, b); z = 3; BEGIN WHILE (a == b) DO IF (c < e) THEN d = c+a ELSE CALL alfa(a, b); END.");
    assert.equal('[{"Type":"Program","Program":{"Type":"BLOCK","CONTENT":{"CONSTS":{"Type":"CONST","Constants":[[{"Type":"=","left":{"ID":"a"},"right":{"Value":"0"},"declared_in":"Global"},{"Type":"=","left":{"ID":"b"},"right":{"Value":"3"},"declared_in":"Global"}]]},"VARS":{"Type":"VAR","Variables":[[{"Variable":"c","declared_in":"Global"},{"Variable":"d","declared_in":"Global"},{"Variable":"e","declared_in":"Global"},{"Variable":"z","declared_in":"Global"}]]},"PROCEDURE":[{"Type":"PROCEDURE","ID":"alfa","Arguments":[{"Type":"ID","Value":"a"},{"Type":"ID","Value":"b"}],"Block":{"Type":"BLOCK","CONTENT":{"CONSTS":[],"VARS":[],"PROCEDURE":[],"STATEMENTS":{"Type":"=","left":{"ID":"z"},"right":{"Value":{"Type":"NUMBER","Value":"3"}}}}},"SymbolTable":{"name":"alfa","father":"Global","symbols":{"a":{"Type":"VAR_ARG"},"b":{"Type":"VAR_ARG"}}},"declared_in":"Global"}],"STATEMENTS":{"Type":"BEGINEND","Expressions":{"Statement":[{"Type":"WHILEDO","left":{"Condition":{"Type":"==","left":{"term":{"Type":"ID","Value":"a"}},"right":{"term":{"Type":"ID","Value":"b"}}}},"right":{"Statement":{"Type":"IFELSE","left":{"Condition":{"Type":"<","left":{"term":{"Type":"ID","Value":"c"}},"right":{"term":{"Type":"ID","Value":"e"}}}},"center":{"Statement":{"Type":"=","left":{"ID":"d"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"ID","Value":"c"}},"right":{"term":{"Type":"ID","Value":"a"}}}}}},"right":{"Statement":{"Type":"CALL","Procedure":{"ID":"alfa","Arguments":[{"Type":"ID","Value":"a"},{"Type":"ID","Value":"b"}]}}}}}}]}}}}}]', JSON.stringify(input));
  });

 });
  
 suite('Pruebas de error', function() {
 
  test('Error de Constante: ', function(){
    assert.throws(function() { pl0.parse("CONST a; a = 2."); }, 'Parse error on line 1:\nCONST a; a = 2.\n-------^\nExpecting \'=\', got \'PCOMA\'');

  });

  test('Error de Procedimiento: ', function(){
    assert.throws(function() { pl0.parse("CALL tutu();"); }, 'Error! el procedimiento \'tutu\' no ha sido declarado');

  });

  test('Error de Argumentos: ', function(){
    assert.throws(function() { pl0.parse("VAR x; PROCEDURE multiply(x); CALL multiply();"); }, 'Error! Los argumentos del procedimiento \'multiply\' son incorrectos');

  });  

 });