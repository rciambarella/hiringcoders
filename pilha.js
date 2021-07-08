// fila primeiro elemento que entra é o primeiro elemento a sair (vetor tamanho limitado)

// pilha ultimo elemento que entra é o primeiro elemento a sair (vetor tamanho limitado)

// listas são valores armazenados em conjunto infinito definidos numa ordem  

var elementos = []; /// vetor ou array inicia na posição ZERO
var topo = -1;
const tamanhoMaximo = 10;

function push(elemento){
    if (topo < tamanhoMaximo){
        topo = topo +1;
        elementos[topo] = elemento;
    }else{
        console.log("Pilha esta Cheia !");
    }

}

function vaziaElementos(){
    return topo == -1;
}

function pop(){
    if (topo != -1){
        let elemento = elementos[topo];
        topo = topo -1;
        return elemento;
    }else{
        console.log("Pilha esta vazia");
    }
}
// popular array elementos
push(115);
push(128);
push(180);


console.log("*************")

// esvaziar array elementos
console.log(pop());
console.log(pop());
console.log(pop());
// cmportamento esvaziar o aaray elementos, retirando 1o o ultimo elemento populado 180, depois 128 e por ultimo 115
console.log("*************")



