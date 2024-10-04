import express from "express";
import { engine } from "express-handlebars";
import Handlebars from "handlebars";
import { GamesRouter } from "./routes/games.routes";
import { AuthRouter } from "./routes/auth.routes";
import * as session from "express-session"; // Importar el módulo de sesiones para express


const app = express();
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views/");

app.use("/", GamesRouter);
app.use("/", AuthRouter);



Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});

app.use("/public/", express.static("public"));

export default app;
