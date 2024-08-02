import { AppDataSource } from "./db/data-source";
import { Genero } from "./models/genero";
import generoRepository from "./repositories/genero.repository";

AppDataSource.initialize().
// Tem que sinalizar o async
then(async () => {
    
        try{
            console.log(`Database is running.`);
            
            let acao : Genero = new Genero(1, "Ação");
            let terror : Genero = new Genero(2, "Terror");
            let drama : Genero = new Genero(3, "Drama");
            let comedia : Genero = new Genero(4, "Comédia");
            
            //aguardar realizar o .save 
            await generoRepository.save(acao);
            await generoRepository.save(terror);
            await generoRepository.save(drama);
            await generoRepository.save(comedia);
            
            console.log('Genres saved successfully!');
        } catch (error) {
            console.error('Error:', error);
        }
})

