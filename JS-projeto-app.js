// projeto Java Script
"Rubens Ciambarella 07 de julho de 2021 -"; "Gama Academy";
let role = " Participa do Hiring Coders 2 "
let modulo = "Modulo 05 Java Script II ***  projeto app JS***"

// iniciar projeto no node no terminal 
// npm init -y cria package-json (informações sobre o projeto)
// modificar de  "test": "echo \"Error: no test specified\" && exit 1" para "star": "node JS-projeto-app.js" 
// dependencia biblioteca permite digitar entrada input de dados npm i readline-sync

const livros = require('./JS-projeto-database')

// criar algoritmo
//capturar a entrada de dados se sim, perguntar qual a categoria, buscar livro da categoria selecionada
//se não, listar todos os livros em ordem crescente qtdade paginas
// pernitir digitar a categoria a escolher
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um Livro? S / N ... ')

// verificar o conteudo digitado
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/História Brasileira', '/Américas', '/Tecnologia', '/Estilo')

    const entradaCategoria = readline.question('Qual categoria você escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    //const livrosOrdenados = livros.sort((livroA,livroB) => livroA.paginas - livroB.paginas) // Ordem crescente    1 qtdade paginas
    //const livrosOrdenados = livros.sort((livroA,livroB) => livroB.paginas - livroA.paginas) // Ordem decrescente -1 qtdade paginas
    const livrosOrdenados = livros.sort((a,b) =>  a.autor > b.autor ? 1 : -1) // Ordem crescente 1 autor
    console.log('*** Essas são todos os livros disponíveis: *** (Em Ordem Crescente Nome do Autor)')
    console.table(livrosOrdenados)
}


