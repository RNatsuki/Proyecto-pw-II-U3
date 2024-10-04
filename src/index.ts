import "dotenv/config";
import app from "./app";
import { AuthModel } from "./models/AuthModel";
const PORT = 3000;

app.listen(PORT, async () => {
  await AuthModel.sync();
  console.log(`Server listening on http://localhost:${PORT}`);
});
