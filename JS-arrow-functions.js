"Rubens Ciambarella 07 de julho de 2021 -";
"Gama Academy";
let role = " Participa do Hiring Coders 2 "
let modulo = "Modulo 05 Java Script II Arrows Functions"

/* forma antes de 2015

function soma(a,b){
    return a + b
}

// ARROW FUNCTIONS É UMA FORMA menos verbosa ESCREVER uma função:
// função Anonima
// ou enquanto call back uma função que chama outra função
// sintaxe 
// EXEMPLO:
*/
const soma = (n1,n2) => n1 * n2 // => função anonima só uma ou abre um escopo {} { dentro do escopo escrever o bloco de instruções }

const sayHello1 = name => `Hello ${name}` 
const sayHello = (name1, name2) => `Hello ${name1}, ${name2}` //  quando passamos 1 parametro não obrigatório (), se mais de um parametro colocare entre (name1, name2) 


console.log(``)
console.log(`*********************`) // comentário
console.log(``) // comentário

console.log(soma(25,125))
console.log(sayHello('Macarena Pinks Cavalisky',' DORITOSION PROCTIONS'))
console.log(sayHello1('mmmmmmmmmmmmmmmmmmm'))


console.log(``) 
console.log(`*********************`) // comentário