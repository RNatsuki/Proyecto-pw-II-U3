import { Request, Response } from "express";

export async function showLogin(req: Request, res: Response) {
  res.render("login");
}
