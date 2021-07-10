//Exemplo 09 | Descrição |
// `FizzBuzz` | criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, 
// para números divisíveis por 3 irá impirmir 'Fizz' 
// e para números divisíveis por 5 irá imprimir 'Buzz' 
// e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. |
let resultado = fizzBuzz(18);
console.log(resultado)

function fizzBuzz(numero) {

    if (typeof numero !== 'number')
       return 'não é tipo numero'
            
    if ((numero %3 === 0) && (numero %5 === 0))
        return 'FIZZBUZZ'
            
    if (numero % 3 === 0){
       return 'FIZZ'
    } else if (numero % 5 === 0){
        return 'BUZZZ'
    }
    return 'FALHOU'
}
