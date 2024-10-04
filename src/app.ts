import express from "express";
import { engine } from "express-handlebars";
import Handlebars from "handlebars";

const app = express();
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views/");

Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});

app.use("/public/", express.static("public"));

export default app;
