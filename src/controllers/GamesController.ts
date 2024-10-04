import { Request, Response } from "express";

export function showIndex (req: Request, res: Response) {
    res.render("index", { title: "Juegos" });
};
