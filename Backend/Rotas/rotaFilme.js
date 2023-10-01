import { Router } from "express";
import FilmeCtrl from "./../Controle/FilmeCtrl.js";

const rotaFilme = Router();

const filCtrl = new FilmeCtrl();

rotaFilme
  .get("/:termo", filCtrl.consultar)
  .get("/", filCtrl.consultar)
  .post("/", filCtrl.gravar)
  .put("/", filCtrl.atualizar)
  .delete("/", filCtrl.excluir);

export default rotaFilme;
