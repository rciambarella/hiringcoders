// Classes
class Data {
    // dia: number; // todas propriedades publicas e que ´pde acessar sem instanciar a data default public, 
    // mes: number; // private mes: number; conceito Orientação ao Objeto
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        // this.dia = dia; // this dia (propriedade) é igual ao dia informado no parametro
        // this.mes = mes; // this mes (propriedade) é igual ao mes informado no parametro
        // this.ano = ano; // this ano (propriedade) é igual ao ano informado no parametro
    }
}

const data = new Data(15, 10, 2020);
console.log(data.dia);

const data2 = new Data(13, 5); // neste sintxe usa o ano definido na classe 1970
console.log(data.dia);

// https://www.typescriptlang.org/play PlayGround do TypeScript

// utilizando modificadores de acesso

class Carro {
    private velocidadeAtual: number = 0;
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    acelerar() {
        const aceleracao = 5;
        if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
            this.velocidadeAtual += aceleracao;
        }
    }
    frear() {
        const frenagem = 5
        if (this.velocidadeAtual - frenagem <= 0) {
            this.velocidadeAtual -= frenagem;
        }
    }
}
const carro = new Carro('Fiat', 'Uno', 250);
carro.velocidadeMaxima = 400; // não permite pois é uma propriedade privada dentro da classe Carro
carro.velocidadeAtual = 400; //  permite pois é uma propriedade publica dentro da classe Carro, mas é estramho
/// então deixar celocidadeAtual também privada, mas criar algiritimo para alterar a velocidade
carro.acelerar(); // permite chamar o metodo acelerar dentro da classs Carro

// código com o exe,plço de modificador de classe 
class CarroAlfa {
    private velocidadeAtual: number = 0;
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    private alterarVelocidade(delta: number) {
        // algoritmo de validação
        const novaVelocidade = this.velocidadeAtual+delta;

        if (novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    }

    acelerar() {
        this.alterarVelocidade(+5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}
const carroAlfa = new CarroAlfa('Fiat', 'Uno', 250);
carro.acelerar(); // permite chamar o metodo acelerar dentro da classs Carro

// HERANÇA 

class Camaro extends CarroAlfa { // extends habilita a gerança do Class Pai
    private turbo = false; // o carro camaro pode ter turbo 
    constructor() {
        super('Wolkswagen','Crhysller',500); // super permite popular os atributos do carro Camaro
    }
    ligarTurbo(){
        this.turbo = true;
    }
}
const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
