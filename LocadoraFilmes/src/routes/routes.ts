import { Application } from "express";
import generoRoutes from "./genero.routes";
import filmeRoutes from "./filme.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/adsFilmes", generoRoutes);
    app.use("/adsFilmes", filmeRoutes);
  }
}
