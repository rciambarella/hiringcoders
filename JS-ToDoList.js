console.log(" Exercicio JS-ToDoList.js 03/07/2021 ");


// como capturar elementos do formulario html
const listContainer = document.querySelector('[data-lists]') // div fantasma
const newListForm = document.querySelector('[data-new-list-form]') // formulario
const newListInput = document.querySelector('[data-new-list-input]') // recebe vaçpres no formulario9

//console.log(listContainer)

let lists = [] //array de objetos to do list
/*
    {
    id:1,
    name: 'A'
    }, 
    {
    id:2,
    name: 'B'   
    }
*/

newListForm.addEventListener('submit',function(e) { // botao funcionar e ligar com o input método addWventListener nativa js escutador de evento nativa do java script
    e.preventDefault() // toda tag form, tem um comportamento d navegador, a pagina é atualizada a cada submit
    const listName = newListInput.value //armazena na variavel lisName cada item digitado no formulário

    if ( listName === null || listName === '') return     // verificar se o imput estra vazio  ou nulo, é encerrada a captura do item no form
        const list = createList(listName) // popular a lista com a função create
        newListInput.value = null // após cpaturar o item para a lista, limpar o formulário
        lists.push(list) // armazena o novo item na lista
        render() // função para mostrar o item na lista no formulario no navegador
})
function createList(name){
    return {id: Date.now().toString(), name: name } // estrutura do retorno de um objeto
}
function render(){
    clearElement(listContainer)
    lists.forEach(function(list) { // percorre a lista (array lists) foreach laço de repetição
        const item = document.createElement('li') // devolve a lista para o formulário e cria um elemento no html
        item.classList.add('item') // adiciona a class no atributo html
        item.innerText = list.name //adiciona o objeto irem no formulario html
        listContainer.appendChild(item) // elemento mãe no html nossa div fantasma
    }) 
}

function clearElement(element) { // função para limpar o elemento
    while (element.firstChild) {
        element.removeChild(element.firstChild) // remove o primeiro elemento digitado no formulário
    }
}


render()



