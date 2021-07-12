"use strict";
// Classes
var Data = /** @class */ (function () {
    // dia: number; // todas propriedades publicas e que ´pde acessar sem instanciar a data default public, 
    // mes: number; // private mes: number; conceito Orientação ao Objeto
    // ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia; // this dia (propriedade) é igual ao dia informado no parametro
        // this.mes = mes; // this mes (propriedade) é igual ao mes informado no parametro
        // this.ano = ano; // this ano (propriedade) é igual ao ano informado no parametro
    }
    return Data;
}());
var data = new Data(15, 10, 2020);
console.log(data.dia);
var data2 = new Data(13, 5); // neste sintxe usa o ano definido na classe 1970
console.log(data.dia);
// https://www.typescriptlang.org/play PlayGround do TypeScript
