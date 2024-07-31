// console.log("Ola Mundo! Curso de NodeJS com TypeScript.");

let nome : string  = "Danilo Farias";
let idade = 37;

// var está descontinuado
var naturalidade: string = "Gravatá-PE"

const dataNasc = "07/09/1986";

// nome = 56; (ERRO)

// idade = "Danilo"; (ERRO)

let cursos : string[] = [];

cursos.push("ADS");
cursos.push("Redes");
cursos.push("Mestrado em CC");

console.log(cursos.push("Especialização em Informática em Saúde"));

cursos.pop();

cursos.shift();

console.log(cursos);

// define our tuple
let ourTuple: [number, boolean, string];

// initialize incorrectly throws an error
//ourTuple = [false, 'Coding God was mistaken', 5];

ourTuple = [5 , false, 'Coding God was mistaken'];

console.log(ourTuple);

console.log(ourTuple[2]);

// Objeto JS
const carro = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

// Objeto TS
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

  // console.log(car);
  console.table(car);

  enum diasDaSemana {
    Domingo = 1,
    Segunda = 2,
    terca = "Terça-feira"
  }

  console.log(diasDaSemana.terca);


  interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

  class Genero {
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
  }

  let genero1: Genero = new Genero("Drama");
  console.table(genero1);

  class Filme {

    private titulo: string;
    private duracao: number;
    private preco: number;
    private genero: Genero;


    constructor(titulo: string, duracao: number, preco: number, geneco: Genero) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.preco = preco;
        this.genero = geneco;
    }
    
  }

  let primeiroFilme: Filme = new Filme("300", 182, 3.5, genero1);
  console.table(primeiroFilme);