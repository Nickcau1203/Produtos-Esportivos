import EsporteModel from "../models/esporteModel.js";

class EsporteController {
  // GET /api/esportes
  async getAllesportes(req, res) {
    try {
      const esportes = await EsporteModel.findAll();
      res.json(esportes);
    } catch (error) {
      console.error("Erro ao buscar esportes:", error);
      res.status(500).json({ error: "Erro ao buscar esportes" });
    }
  }

  // GET /api/esportes/:id
  async getEsporteById(req, res) {
    try {
      const { id } = req.params;

      const Esporte = await EsporteModel.findById(id);

      if (!Esporte) {
        return res.status(404).json({ error: "Esporte não encontrado" });
      }

      res.json(Esporte);
    } catch (error) {
      console.error("Erro ao buscar Esporte:", error);
      res.status(500).json({ error: "Erro ao buscar Esporte" });
    }
  }

  // POST /api/esportes
  async createEsporte(req, res) {
    try {
      // Validação básica
      const {
        id,
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive,
        createdAt,
        updatedAt,
      } = req.body;

      // Verifica se todos os campos do Esporte foram fornecidos
      if (
        !id ||       id,name,price,category,brand,stock,imageUrl,isActive,createdAt,updatedAt,
        !name ||
        !episodes ||
        !category ||
        !brand ||
        !stock ||
        !createdAt ||
        !updatedAt
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo Esporte
      const newEsporte = await EsporteModel.create(
        id,      
        name,
        episodes,
        category,
        brand,
        stock,
        createdAt,
        updatedAt
      );

      if (!newEsporte) {
        return res.status(400).json({ error: "Erro ao criar Esporte" });
      }

      res.status(201).json(newEsporte);
    } catch (error) {
      console.error("Erro ao criar Esporte:", error);
      res.status(500).json({ error: "Erro ao criar Esporte" });
    }
  }

  // PUT /api/esportes/:id
  async updateEsporte(req, res) {
    try {
      const { id } = req.params;
      const {  
        name,
        episodes,
        category,
        brand,
        stock,
        createdAt,
        updatedAt,
      } = req.body;

      // Atualizar o Esporte
      const updatedEsporte = await EsporteModel.update(
        id,      
        name,
        episodes,
        category,
        brand,
        stock,
        createdAt,
        updatedAt
      );

      if (!updatedEsporte) {
        return res.status(404).json({ error: "Esporte não encontrado" });
      }

      res.json(updatedEsporte);
    } catch (error) {
      console.error("Erro ao atualizar Esporte:", error);
      res.status(500).json({ error: "Erro ao atualizar Esporte" });
    }
  }

  // DELETE /api/esportes/:id
  async deleteEsporte(req, res) {
    try {
      const { id } = req.params;

      // Remover o Esporte
      const result = await EsporteModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Esporte não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover Esporte:", error);
      res.status(500).json({ error: "Erro ao remover Esporte" });
    }
  }
}

export default new EsporteController();
