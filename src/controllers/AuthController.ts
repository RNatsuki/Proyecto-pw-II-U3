import { Request, Response } from "express";
import { GameModel } from "../models/GameModel";
import { AuthModel } from "../models/AuthModel";

export async function showLogin(req: Request, res: Response) {
  res.render("login");
}

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await AuthModel.findOne({
    where: {
      username,
      password,
    },
  });

  if (!user) {
    res.render("login", { errors: ["Usuario o contraseña incorrectos"] });
    return;
  }

  req.session.user = user.dataValues;
  res.redirect("/dashboard");
}

export async function logout(req: Request, res: Response) {
  req.session.destroy(() => {
    res.redirect("/login");
  });
}

export async function showDashboard(req: Request, res: Response) {
  const games = await GameModel.findAll();
  const gamesJSON = games.map((game) => game.toJSON());

  res.render("dashboard", { user: req.session.user, games: gamesJSON });
}
