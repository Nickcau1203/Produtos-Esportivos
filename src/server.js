import express from "express";
import { config } from "dotenv";

import esportesRouter from "./routes/esporteRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();

app.use(express.json()); // Parse de JSON

app.use("/esportes", esportesRouter); // Usar as rotas de esportes

// Rota base para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de esportes funcionando!" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
