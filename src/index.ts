import app from "./app";
import { GameModel } from "./models/GameModel";
import { GamesRouter } from "./routes/games.routes";
const PORT = 3000;

app.use("/", GamesRouter);

app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
