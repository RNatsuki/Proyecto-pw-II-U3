import { Request, Response } from "express";

export function showIndex(req: Request, res: Response) {
  const title = "Nuestros juegos";
  const games = [
    { id: 1, title: "Super Mario Bros", description: "Juego de plataformas", img: "stardew.png" },
    { id: 2, title: "Zelda", description: "Juego de aventuras", img: "zelda.png" },
    { id: 3, title: "Metroid", description: "Juego de acción", img: "metroid.png" },
    { id: 4, title: "Castlevania", description: "Juego de plataformas", img: "castlevania.png" },
    { id: 5, title: "Final Fantasy", description: "Juego de rol", img: "final-fantasy.png" },
  ];
  res.render("index", { title, games });
}
