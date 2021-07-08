/********************** BUSCA DE ELEMENTOS ( CONJUNTOS )*********************** */

// BUSCA SEQUENCIAL é mais lenta 

var valores =[5,8,10,22,45,38];

function busca(num){
    for (i=0; i < 6; i++){
        if (num == valores[i]){
            return i;
        }
    }
    return -1;
}


// usando a nossa ferramenta de busca
console.log(busca(10));
console.log(busca(45));
console.log(busca(50));


// BUSCA BINARIA - CRIAR MODELOS DADO OS ELEMENTOS DO CONJUNTO, PEGAR A POSIÇÃO DO MEIO


// ordem logaritma , paaso 1 encopntrar elemento do meio e assim vai passo a passo até chegar o fim do conjunto
// conjunto com 64 elementos, 64/2=32/16/2=8/2=4/2=2/2=0
console.log("#######################################################################");

var valoresBinarios = [5,8,10,22,38,45,50,61,71,100,125,131,144,149]; 

function buscaBinaria(numeroABuscar){
    let inicio, posicao;
    let passos = 0;
    let meio;
    inicio = 0;
    posicao = valoresBinarios.length;
    while (inicio <= posicao){
        meio = parseInt((inicio + posicao) / 2);
        passos = passos + 1;
        if (numeroABuscar == valoresBinarios[meio]){
            console.log("achei em " + passos + " passos");
            return meio;
        }
        else{
            if (numeroABuscar > valoresBinarios[meio]){
                inicio = meio +1;
            }else {
                posicao = meio -1;
            }

        }
    }
    console.log("nao achei em " + passos + " passos");
    return -1;
}
console.log(buscaBinaria(144));
console.log(buscaBinaria(43));
console.log(buscaBinaria(50));
console.log("#######################################################################");
