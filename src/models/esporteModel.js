import prisma from "../../prisma/prisma.js";

class EsporteModel {
  // Obter todos os esportes
  async findAll() {
    const esportes = await prisma.Esporte.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(esportes);

    return esportes;
  }

  // Obter um Esporte pelo ID
  async findById(id) {
    const Esporte = await prisma.Esporte.findUnique({
      where: {
        id: Number(id),
      },
    });

    return Esporte;
  }

  // Criar um novo Esporte
  async create(
    id,
    name,
    price,
    category,
    brand,
    stock,
    imageUrl,
    isActive,
  ) {
    const newEsporte = await prisma.Esporte.create({
      data: {
        id,
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive,
      },
    });

    return newEsporte;
  }

  // Atualizar um Esporte
  async update(
        id,
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive,
        createdAt,
  ) {
    const Esporte = await this.findById(id);

    if (!Esporte) {
      return null;
    }

    // Atualize o Esporte existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (episodes !== undefined) {
      data.episodes = episodes;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }
    if (studio !== undefined) {
      data.studio = studio;
    }
    if (genres !== undefined) {
      data.genres = genres;
    }
    if (rating !== undefined) {
      data.rating = rating;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const EsporteUpdated = await prisma.Esporte.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return EsporteUpdated;
  }

  // Remover um Esporte
  async delete(id) {
    const Esporte = await this.findById(id);

    if (!Esporte) {
      return null;
    }

    await prisma.Esporte.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new EsporteModel();
