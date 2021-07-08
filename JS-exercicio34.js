"Rubens Ciambarella 07 de julho de 2021 -";
"Gama Academy";
let role = " Participa do Hiring Coders 2 "
let modulo = "Modulo 05 Java Script II Revisão"

//console.log(`Rubens Ciambarella é ${role} na Gama Academy Exercício 34 ${modulo}`) // comentário

// criar algoritmo que recebe 3 notas de aluno, calcular sua média e mostre as seguintes mensagens de acordo com cada situação.
// se media >= 7 aprovado
// se media >= 5 e < 7 Recuperação
// se media <5 Reprovado 

function calculaMedia(nota1,nota2,nota3)
{
    let media=(nota1+nota2+nota3) / 3

    if (media >= 7){
        return `Resultado Aprovado`
        }else if (media < 5){
            return `Resultado Reprovado`
        }else if(media >=5 && media<7){
            return `Resultado Em recuperação`
        }
}

console.log(calculaMedia(8,4,6))

