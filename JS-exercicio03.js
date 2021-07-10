
//| Exemplo 03 | Descrição |
// `Média entre números` | Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos. |
let variavel01 = 0;
let variavel02 = 0;
var variavel03 = 0;
var variavel04 = 0;
const variavel05 = 0;
const variavel06 = "A media  do calculo é ... ";
let total = 0;

function calcular(variavel01, variavel02, variavel03, variavel04, variavel05){
    total = (variavel01+variavel02+variavel03+variavel04+variavel05)/5;
    console.log("O total da expressão é igual ",total);
    console.log(variavel06 + total);
}

calcular(100, 200, 300,400,500);
