import { AppDataSource } from "../db/data-source";
import { Filme } from "../models/filme";

class FilmeRepository {
    filmeRepository = AppDataSource.getRepository(Filme);

    async save(filme: Filme): Promise<Filme> {
        try {
            this.filmeRepository.save(filme);
            return filme;
        } catch (err) {
            throw new Error("Falha ao criar o filme!");
        }
    }

    async retrieveAll(): Promise<Array<Filme>> {
        try {
            return this.filmeRepository.find();
        } catch (error) {
            throw new Error("Falha ao retornar os filmes!");
        }
    }

    async retrieveById(filmeId: number): Promise<Filme | null> {
        try {
            return this.filmeRepository.findOneBy({
                idFilme: filmeId,
            });
        } catch (error) {
            throw new Error("Falha ao buscar o filme!");
        }
    }

    async update(filme: Filme) {
        const { idFilme, tituloOriginal, tituloPT, preco, duracao, ano, faixaEtaria, generos } = filme;
        try {
            this.filmeRepository.save(filme);
        } catch (error) {
            throw new Error("Falha ao atualizar o filme!");
        }
    }

    async delete(filmeId: number): Promise<number> {
        try {
            const filmeEncontrado  = await this.filmeRepository.findOneBy({
                idFilme: filmeId,
            });
            if (filmeEncontrado) {
                this.filmeRepository.remove(filmeEncontrado);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o filme!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.filmeRepository.query("select count(idFilme) from Filme;");
            this.filmeRepository.query("delete from Filme;");
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os filmes!");
        }
    }
}

export default new FilmeRepository();