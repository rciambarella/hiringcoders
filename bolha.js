// Hiring Coders - Estutura de Dados - Algoritimos de Ordenação I e II
// Algoritimo da Bolha  BUSCA BINARIA
// dado um conjunto de valoes, eu pego o sempre o 1o valor em relação ao proximo valor (Ordem Crescente)
// busca binária é eficiente, mas obrigatório ordenar

var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]  

function ordena() {
    let indiceInicio = 0;
    let indiceFim = 21;
    let temp;

    for (vezes = 0; vezes < indiceFim; vezes++){
        for (posicao = indiceInicio; posicao < indiceFim -1 ; posicao++) {
            if (valores[posicao] > valores[posicao + 1]) {
                temp = valores[posicao];
                valores[posicao] = valores[posicao + 1];
                valores[posicao + 1] = temp;
            }
        }
    }
}

ordena();
console.log("Vetor Ordenado = ");
console.log(valores);

/***************************************************************** */
// estrutura Hast palavras chaves (indice) convertida para uma posição
// Em 1 passso encontrar a posição de um valor , e num unico passo acessa o valor

/***************************************************************** */
// estrutura de Arvore - organizada similar a busca binaria
// porém o valor maior esta sempre a descendia a direita são maiores

