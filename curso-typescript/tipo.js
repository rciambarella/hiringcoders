"use strict";
// Declaração de Tipos
// Boolen
var contaPaga = false;
// number
var idade = 23;
var avaliacao = 4.1535;
// String
var nome = "Rubens Ciambarella";
// Array
var idades = [23, 18, 13, 35];
// ou forma mais verbosa
var idades2 = [65, 49, 24, 13, 35];
// Tuple ( é um tipo de array ), informa a qtdade de posições e o tipo de cada posição
var jogadores;
jogadores = ['Antonio Pedro', 'Goleiro', 21, 1.89, true];
// site que tem todos os tipos https://www.typescriptlang.org/docs/handbook/basic-types.html
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
// Any qualquer coisa
var retornoDaApi = [123, 'atributo01', false, 'Amora'];
var retornoDaApiDois = {
// ....... contém vários atributos
};
// Void utilizado para função que não tem retorno
function imprimaNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var nomeVarU = undefined;
var nomeVarN = null;
// Obkect define que é tipo objeto
function criar(nomeObjeto) {
    // .....
}
criar({
    propriedadeA: 1,
    propriedadeB: 2,
    propriedadeC: 3,
});
// esta sintaxe apresenta erro criar('Vitor') não esta correta dará erro
// Never
function loopInfinito() {
    while (true) { }
}
//ou
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Aconteceu Falha na rotina!');
}
// Union Types pode ter mais de um tpo de conteudo
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(08);
exibirNota(true);
// type funcionarios = Array<Funcionarios>;
var funcionarios = [{
        nome: 'Marcos',
        sobrenome: 'Aurelio',
        idade: 33,
        dataNascimento: new Date()
    }, {
        nome: 'João',
        sobrenome: 'Da Silva',
        idade: 53,
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Mome do Funcionário: ', funcionario.nome);
    }
}
// valores null ou opcional
var altura = 1.36;
// let altura: number // nesta sintaxe apresenta erro 
altura = null; // nesta sintaxe apresenta erro 
var contato = {
    nome: 'Vitor',
    telefoneUm: '011-988776655',
};
// Type Assertion (permite definir o tipo da variavel em qualquer lugar no algoritimo)
var minhaIdade = 23;
minhaIdade.toString(); // define o tipo da variabvel a partir desta linha  como number ( as number ) 
// na pratica exemplo captura um campo no formulário HTML
var input = document.getElementById("numero");
console.log(input.value);
