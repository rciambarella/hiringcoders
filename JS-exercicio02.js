//Exemplo 02 | Descrição |
// Concatenar x interpolar` | Vamos criar variaveis usando let, const e var, atribuir strings e vamos concatenar e interpolar. |
let variavel01 = 0;
let variavel02 = "teste variavel tipo let";
var variavel03 = 0;
var variavel04 = "teste variavel tipo var";
const variavel05 = 0;
const variavel06 = "teste variavel tipo const";
let total = 0;

function calcular(variavel01, variavel03, variavel05){
    total = (((variavel01*variavel03)/2)*variavel05)*3;
    console.log("O total da expressão é igual ",total);
    console.log('O ' + variavel02 +` X O ` + variavel04 + ` X O ` + variavel06 + ' é igual há ');
    console.log(variavel01*+variavel03*variavel03)
}

calcular(100, 200, 300);
