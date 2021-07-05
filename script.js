console.log(" ***** Ola, Iniciando modulo 4 Java Script Básico ***** ");

var myName = "Meu nome é Rubens Ciambarella";

let language = "Javascript";

const pattern = "ECMAScript";

const myMother = "Maria Rosa";

console.log(myName);

{
    var age = 55
}
console.log(" ******************************** ");
console.log('minha idade é: ', age);

// operadores aritméticos

// operador de atribuição
// de soma
var x = 1;
var y = 3;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
//resto
console.log(x %= y);

console.log(" CONDICIONAL IF ******************************** ");
// condicional

var num = 1;
num = 5

if (num === 1) {
    console.log(" A variável num contém ", num);
} else if (num === 2) {
    console.log(" Proximo Validação - A variável num contém ", num);
} else {
    console.log(" A variável num contém ", num, " não é 1 e não é 2 !!!");
}
console.log(" SWITCH CASE***************************** ");

var mes = "Maio";
switch (mes) {
    case "Fevereiro":
        console.log(" Validação - mÊs digitado foi: ", mes);
        break;

    case "Março":
        console.log(" Validação - mÊs digitado foi: ", mes);
        break;

    case "Maio":
        console.log(" Validação - mÊs digitado foi: ", mes);
        break;

    default:
        console.log(" Validação não atendida - mÊs digitado foi: ", mes);
}
console.log(" FOR ******************************** ");

var colors = ["black", "yellow", "pink", "orange", "green", "blue"]

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log(" FOR **************************** ");

for (var i = 1; i <= 9; i++) {
    if (i % 2 != 0) {
        console.log(" * ")
    } else {
        console.log(" O número ", i, " é par !!!");
    }
}
console.log(" WHILE ******************************** ");

var i = 0;

while (i <= 9) {
    console.log("O número é: ", i);
    i++;
}

console.log(" DO While ! ******************************** ");

var i = 0;

do {
    console.log("O número é: ", i);
    i++;
} while (i <= 9);

console.log(" FUNÇÕES ! /\/\//|/\/\//\/\/\/\/\/\/\/ ");

function dizer() {
    console.log(" function dizer()  ");
}
dizer();

console.log(" FUNÇÕES passando parametros !/\/\//\\/\/\/\/\/\\\/\/\\/\/\/\/\\ ");

function dizername(name, idade) {
    console.log('*');
    console.log(' function com PARAMETRO ! ');
    console.log(' EU TE AMO ! ' + name + 'sua idade é: ' + idade);
    console.log('*');

}
dizername("Vera Lucia Virginio Ciambarella", 50);

console.log(" FUNÇÕES passando parametros c/ operação !/\/\//\\/\/\/\/\/\\\/\/\\/\/\/\/\\ ");

function sum(a, b) {
    return a + b;
}

console.log(sum(40, 60));

console.log(" CLASSES ############################## ");

class Livro {
    constructor(titulo, autor, pagina) {
        this.titulo = titulo;
        this.autor = autor;
        this.pagina = pagina;
    }

    ler() {
        return `Estou lendo o: ${this.titulo} do autor: ${this.autor} total paginas: ${this.pagina}`
    }
}
console.log(" CLASSES com herança $$$$$$$$$ ");

class ITLivro extends Livro{
    constructor(titulo, autor, pagina, tecnologia){
        super(titulo, autor, pagina);
        this.tecnologia = tecnologia;
    }
}

let itLivro1 = new ITLivro('Sitio do Picapau Amarelo', 'Rui Barbosa de Andrade', 500, "Mobile");

let itLivro2 = new ITLivro('Arariboia', 'Jos[e de Anchieta', 180, "HTML");

let itLivro3 = new ITLivro('O Vento dos MOrros', 'Bryan Kendy Lincon', 238, "Java Script");

console.log(itLivro1.ler());

console.log(" ********* / @@@@@@@@@ / ********** ");

console.log(" +_+_+_+_+_+_+ cLASSES UTILIANDO METODOS get ou set _+_+_+_++_+_+_ ");

class Pessoa{
    constructor(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }

    set nome(value){
        this._nome = value;
    }
}

console.log(" CLASSES UTILIANDO METODOS get  _+_+_+_++_+_+_ ");
let pessoa1 = new Pessoa("Rubens Ciambarella");
console.log("método get() o resultado é = ",pessoa1.nome)

console.log("  CLASSES UTILIANDO METODOS set _+_+_+_++_+_+_ ");
pessoa1.nome = "Pietro Gondofi"
console.log("método set() o resultado é = ",pessoa1.nome)