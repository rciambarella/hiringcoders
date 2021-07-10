console.log(" Exercicio FizzBuzz.js 03/07/2021 ");

// FizzBuzz
// O número é Divisivel é 3 ? Sim é Fizz
// O número é Divisivel é 5 ? Sim é Buzz
// O número é Divisivel é 3 ou 5 ? Sim é FizzBuzz
// Se não for um número ? Então, não é numero
// Se não for divisivel por 3 e nem por 5 ? Então, Entrada

let resultado = fizzBuzz(15);
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Atenção! - Não foi digitado número!'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if (entrada % 3 === 0) {
        return 'Fizz'
    } else if (entrada % 5 === 0) {
        return 'Buzz'
    }
    return "Entrada divergente " + entrada
}
/*
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
*/