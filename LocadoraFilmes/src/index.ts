import { AppDataSource } from "./db/data-source";
import { Genero } from "./models/genero";
import generoRepository from "./repositories/genero.repository";

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))

// Teste dos Repositorios
let acao : Genero = new Genero(1, "Ação");
let terror : Genero = new Genero(2, "Terror");
let drama : Genero = new Genero(3, "Drama");
let comedia : Genero = new Genero(4, "Comédia");

// Inserindo os Generos
generoRepository.save(acao);
generoRepository.save(terror);
generoRepository.save(drama);
generoRepository.save(comedia);