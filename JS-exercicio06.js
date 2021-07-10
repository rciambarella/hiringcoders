// Exemplo 06 | Descrição |
// `Desapegada` | Crie um programa que me diga quanto cobrar para vender um notebook usado: 
// o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%? |
let notebook = 3000;
let percentual = 25;
let perdaEmReal = 0;

function calcular(){
    perdaEmReal = (notebook*percentual)/100;
    precoVenda = notebook-perdaEmReal;
    console.log(`O Valor de compra do Notebook foi de R$ `+ notebook);
    console.log(`O desconto em R$ `+ perdaEmReal);
    console.log(`A perda é de R$ `+ perdaEmReal);
    console.log(`O Preçp de Venda do Notebook Usado é R\$\ `+ precoVenda);
}

calcular();
