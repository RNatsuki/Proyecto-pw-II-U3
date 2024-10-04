import app from "./app";
import { GamesRouter } from "./routes/games.routes";

const PORT = 3000;

app.use("/", GamesRouter);

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
