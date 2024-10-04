import express from "express";
import { engine } from "express-handlebars";
import Handlebars from "handlebars";
import { GamesRouter } from "./routes/games.routes";
import { AuthRouter } from "./routes/auth.routes";
import * as session from "express-session"; // Importar el módulo de sesiones para express
import { sessionStore } from "./utils/SessionStore";
import { Role } from "./models/AuthModel";

const app = express();
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views/");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

declare module "express-session" {
  interface SessionData {
    user?: {
      username: string;
      role: Role;
    };
  }
}


app.use(
  session.default({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
    store: sessionStore,
  })
);


app.use("/", GamesRouter);
app.use("/", AuthRouter);



Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});

app.use("/public/", express.static("public"));

export default app;
