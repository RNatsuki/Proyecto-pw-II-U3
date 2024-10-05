import "dotenv/config";
import app from "./app";
import { AuthModel } from "./models/AuthModel";
import { GameModel } from "./models/GameModel";
const PORT = 3000;

app.listen(PORT, async () => {
  await AuthModel.sync();
  await GameModel.sync({alter: true});
  console.log(`Server listening on http://localhost:${PORT}`);
});
