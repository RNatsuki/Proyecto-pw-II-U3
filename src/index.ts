import "dotenv/config";
import app from "./app";
import { GameModel } from "./models/GameModel";
const PORT = 3000;

app.listen(PORT, async () => {
  await GameModel.sync({ force: true });
  const games = [
    {
      id: 1,
      title: "Stardew Valley",
      description: "Juego de Granja",
      img: "stardew.png",
      downloadLink: "https://www.google.com",
      tags: ["Granja", "Simulacion", "Multijugador"],
    },
    {
      id: 2,
      title: "Zelda",
      description: "Juego de aventuras",
      img: "zelda.png",
      downloadLink: "https://www.google.com",
      tags: ["Aventura", "RPG"],
    },
    {
      id: 3,
      title: "Metroid",
      description: "Juego de acción",
      img: "metroid.png",
      downloadLink: "https://www.google.com",
      tags: ["Aventura", "Shooter"],
    },
    {
      id: 4,
      title: "Castlevania",
      description: "Juego de plataformas",
      img: "castlevania.png",
      downloadLink: "https://www.google.com",
      tags: ["Plataformas", "Aventura"],
    },
    {
      id: 5,
      title: "Final Fantasy",
      description: "Juego de rol",
      img: "final-fantasy.png",
      downloadLink: "https://www.google.com",
      tags: ["RPG", "Aventura"],
    },
  ];

  await GameModel.bulkCreate(games);

  console.log(`Server listening on http://localhost:${PORT}`);
});
