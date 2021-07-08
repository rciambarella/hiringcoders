"Rubens Ciambarella 07 de julho de 2021 -"; "Gama Academy";
let role = " Participa do Hiring Coders 2 "
let modulo = "Modulo 05 Java Script II *** ARRAYS DE OBJETOS  JS-objetos-destructing ***"

// array de objetos
const filmes = [
    {
        id:1, 
        titulo: "Casa Caiu 01",
        descricao: "Teste de Array de objetos id 1",
        duracao: 120
    },
    {
        id:2, 
        titulo: "melecas 01",
        descricao: "Teste de Array de objetos id 2",
        duracao: 120
    },
    {
        id:3, 
        titulo: "Corras",
        descricao: "Teste de Array de objetos id 3",
        duracao: 120
    },
]
// metodos mais modernos, mas é possivel utilizar for ou foreach para acessar os objetos e atributos
const {id, titulo, descricao, duracao} = filmes

filmes.map(filme => console.log(filme.id,filme.titulo, filme.descricao, filme.duracao))