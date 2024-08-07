import { Router } from "express";
import FilmeController from "../controllers/filme.controller";


class FilmeRoutes {
  router = Router();
  controller = new FilmeController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo Filme.
    this.router.post("/filme", this.controller.create);

    // Retornar os Filmes já cadastrados.
    this.router.get("/filmes", this.controller.findAll);

    // Retorna um Filme específico pelo seu id
    this.router.get("/filme/:id", this.controller.findOne);

    // Atualizar um Filme pelo seu id
    this.router.put("/filme/:id", this.controller.update);

    // Deleta um Filme pelo seu id
    this.router.delete("/filme/:id", this.controller.delete);

    // Deleta todos os Filmes
    this.router.delete("/filmes/", this.controller.deleteAll);
  }
}

export default new FilmeRoutes().router;