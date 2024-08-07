import { Request, Response } from "express";
import { Filme } from "../models/filme";
import filmeRepository from "../repositories/filme.repository";
import { Genero } from "../models/genero";
import generoRepository from "../repositories/genero.repository";



export default class FilmeController {

    async create(req: Request, res: Response) {
        if (!req.body.tituloOriginal) {
            res.status(400).send({
                message: "Não pode ser vazio o filme!"
            });
            return;
        }

        try {
            const filme: Filme = req.body;
            /*const idGenero1 : number = req.body.generos[0].id;
            const idGenero2 : number = req.body.generos[1].id;
            const genero1 : Promise<Genero | null> = generoRepository.retrieveById(idGenero1);
            const genero2 : Promise<Genero | null> = generoRepository.retrieveById(idGenero2);
            filme.generos = new Array<Genero>();
            filme.generos[0] = genero1;*/

            const savedFilme = await filmeRepository.save(filme);
            res.status(201).send(savedFilme);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um filme."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const filmes = await filmeRepository.retrieveAll();
            res.status(200).send(filmes);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os filmes."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const filme = await filmeRepository.retrieveById(id);
            if (Filme) res.status(200).send(filme);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum filme com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o filme com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let filme: Filme = req.body;
        filme.idFilme = parseInt(req.params.id);        
        try {
            await filmeRepository.update(filme);
            res.send({
                message: `Filme ${filme.tituloOriginal} atulizado com sucesso!`
            });
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o filme com id=${filme.idFilme}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await filmeRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Filme deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Filme com id=${id}. O Filme não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Filme com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await filmeRepository.deleteAll();

            res.send({ message: `${num} Filmes foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os filmes."
            });
        }
    }

}