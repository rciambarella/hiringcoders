// projeto
"Rubens Ciambarella 07 de julho de 2021 -"; "Gama Academy";
let role = " Participa do Hiring Coders 2 "
let modulo = "Modulo 05 Java Script II ***  projeto app JS***"

// iniciar projeto no node no terminal 
// npm init -y cria package-json (informações sobre o projeto)
// modificar de  "test": "echo \"Error: no test specified\" && exit 1" para "star": "node JS-projeto-app.js" 
// dependencia biblioteca permite digitar entrada input de dados npm i readline-sync

const livros = require('./JS-projeto-database')

// criar algoritmo
// pernitir digitar a categoria a escolher
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um Livro? S / N')

//capturar a entrada de dados se sim, perguntar qual a categoria, se não, listar todos os livros em ordem crescente qtdade paginas
// verificar o conteudo digitado
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log(('Produtividade e Estilo de Vida', '/História Brasileira', '/Américas', '/Tecnologia', '/Estilo de vida'))

const entradaCategoria = readline.question('Qual categoria você escolhe:')


}


