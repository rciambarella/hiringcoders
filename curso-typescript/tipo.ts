// Declaração de Tipos

// Boolen
const contaPaga: boolean = false;

// number
const idade: number = 23;
const avaliacao: number = 4.1535;

// String
const nome: string = "Rubens Ciambarella";

// Array
const idades: number[] = [23, 18, 13, 35];
// ou forma mais verbosa
const idades2: Array<number> = [65, 49, 24, 13, 35];

// Tuple ( é um tipo de array ), informa a qtdade de posições e o tipo de cada posição
let jogadores: [string, string, number, number, boolean];
jogadores = ['Antonio Pedro', 'Goleiro',21,1.89,true];

// site que tem todos os tipos https://www.typescriptlang.org/docs/handbook/basic-types.html


// enum
enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;

enum statusAprovacao {
    Aprovado = '001', // pode mapear e identificar codigos ou internamente 0, 1, 2, ...
    Pendente = '002',
    Rejeitado= '003'
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;

// Any qualquer coisa
const retornoDaApi: any[]= [123, 'atributo01', false, 'Amora'];
const retornoDaApiDois: any = {
    // ....... contém vários atributos
};

// Void utilizado para função que não tem retorno
function imprimaNaTela( msg: string): void {
    console.log(msg);
}

// Null e Undefined
const nomeVarU: undefined = undefined;
const nomeVarN: null = null;

// Obkect define que é tipo objeto
function criar(nomeObjeto: object){
    // .....
}
criar({
    propriedadeA: 1,
    propriedadeB: 2,
    propriedadeC: 3,
})
// esta sintaxe apresenta erro criar('Vitor') não esta correta dará erro

// Never
function loopInfinito(): never{
    while (true){}
}
//ou
function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha() { // no caso, uma função quando chamar uma do tipo never, a nova funç=ção recebe o mesmo tipo never
    return erro('Aconteceu Falha na rotina!');
}

// Union Types pode ter mais de um tpo de conteudo

function exibirNota(nota: number | string | boolean){
        console.log(`A nota é ${nota}`);
} 

exibirNota('10');
exibirNota(08);
exibirNota(true);

// Alias
type Funcionario ={
    nome: string;
    sobrenome: string;
    idade: number;
    dataNascimento: Date; // --> Date Não é um tipo, MAS É UMA INTERFACE
}

// type funcionarios = Array<Funcionarios>;
const funcionarios: Funcionario[] = [{ // no caso, Funcionario é um tipo 
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

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Mome do Funcionário: ',funcionario.nome);
}
}

// valores null ou opcional
let altura: number | null = 1.36;
// let altura: number // nesta sintaxe apresenta erro 

altura = null; // nesta sintaxe apresenta erro 

type Contato = {
    nome: string;
    telefoneUm: string;
    telefoneDois?: string; // caracter ? undefined
    // telefoneDois: string | null
}

const contato: Contato = {
    nome: 'Vitor',
    telefoneUm: '011-988776655',
}

// Type Assertion (permite definir o tipo da variavel em qualquer lugar no algoritimo)
const minhaIdade: any = 23;
(minhaIdade as number).toString(); // define o tipo da variabvel a partir desta linha  como number ( as number ) 
// na pratica exemplo captura um campo no formulário HTML
const input = document.getElementById("numero") as HTMLInputElement;
console.log(input.value);