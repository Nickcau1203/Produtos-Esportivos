import express from "express";
import EsporteController from "../controllers/esporteController.js";

const esportesRouter = express.Router();

// Rotas de Esportes
// GET /esportes - Listar todos os Esportes
esportesRouter.get("/", EsporteController.getAllEsportes);

// GET /esportes/:id - Obter um Esporte pelo ID
esportesRouter.get("/:id", EsporteController.getEsporteById);

// POST /esportes - Criar um novo Esporte
esportesRouter.post("/", EsporteController.createEsporte);

// PUT /esportes/:id - Atualizar um Esporte
esportesRouter.put("/:id", EsporteController.updateEsporte);

// DELETE /esportes/:id - Remover um Esporte
esportesRouter.delete("/:id", EsporteController.deleteEsporte);

export default esportesRouter;
