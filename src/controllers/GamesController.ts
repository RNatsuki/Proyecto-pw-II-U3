import { Request, Response } from "express";
import { GameModel } from "../models/GameModel";

export async function showIndex(req: Request, res: Response) {
  const title = "Nuestros juegos";
  const games = await GameModel.findAll()
  const jsonGames = games.map((game) => game.toJSON());
  res.render("index", { title, games: jsonGames });
}

export async function showGame(req: Request, res: Response) {
  const { id } = req.params;

  res.send(`Mostrando el juego con id ${id}`);
}
