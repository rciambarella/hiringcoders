//Exemplo 04 | Descrição |
//`Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300,
// por quanto devo vendê-la para lucrar 25%? |

let bicicleta = 0;
let margem = 25;
let percentual = 60;
let real60=300;
let lucro = 0;

function calcular(){
    bicicleta = (real60/percentual)*100;
    precoVenda = ((bicicleta*margem)/100)+bicicleta;
    lucroPercentual = ((precoVenda-bicicleta)/bicicleta)*100;
    lucro = precoVenda-bicicleta;    
    console.log(`O Valor de compra da Bicicleta foi de R$ `+ bicicleta);
    console.log(`O preço de Venda da Bicicleta é R$ `+ precoVenda);
    console.log(`O Lucro em Percentual é `+ lucroPercentual);
    console.log(`O Lucro é R\$\ `+ lucro);
}

calcular();


