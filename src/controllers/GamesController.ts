import { Request, Response } from "express";
import { GameModel } from "../models/GameModel";
import { sequelize } from "../db";
import { upload } from "../utils/multer";
export async function showIndex(req: Request, res: Response) {
  const { category } = req.query;
  const games = await GameModel.findAll();
  let filteredGames = games;
  if (category) {
    filteredGames = games.filter((game: any) =>
      game.tags.includes(category as string)
    );
  }

  const jsonGames = games.map((game) => game.toJSON());
  const jsonGamesFiltered = filteredGames.map((game) => game.toJSON());

  // Extraer y procesar las categorías
  const categoriesArray = jsonGames.map((game) => game.tags);
  // Paso 1: Parsear las cadenas JSON
  const parsedCategories = categoriesArray.map((item) => JSON.parse(item));

  // Paso 2: Aplanar el array
  const flatCategories = parsedCategories.flat();

  // Paso 3: Filtrar categorías únicas
  const uniqueCategories = Array.from(new Set(flatCategories));

  res.render("index", {
    title: "Nuestros Juegos",
    games: filteredGames.length ? jsonGamesFiltered : jsonGames,
    categories: uniqueCategories,
  });
}

export async function showGame(req: Request, res: Response) {
  const { id } = req.params;
  const game = await GameModel.findByPk(id);

  if (!game) {
    res.status(404).send("Juego no encontrado");
    return;
  }

  // Convertir el juego a JSON
  const gameData = game.toJSON();

  // Obtener la categoría del juego actual
  const categories = gameData.tags; // Supongamos que tags son las categorías

  // Obtener juegos relacionados por categoría
  const relatedGames = await sequelize.query(`
    SELECT * FROM Games WHERE tags LIKE '%${categories[0]}%' AND id != ${id} LIMIT 3
    `);

  res.render("game", {
    title: gameData.title,
    game: gameData,
    relatedGames: relatedGames[0],
  });
}

export async function addGame(req: Request, res: Response) {
  upload(req, res, async (err) => {
    if (err) {
      res.status(400).send("Error al subir archivos");
      return;
    }

    const { title, description, tags } = req.body;
    //@ts-ignore
    const img = req.files["img"][0].filename;
    //@ts-ignore
    const zip = req.files["zip"][0].filename;

    try {
      await GameModel.create({
        title,
        description,
        tags,
        img,
        fileName: zip,
      });

      res.redirect("/");
    } catch (error) {
      res.status(400).send("Error al crear el juego");
    }
  });
}
