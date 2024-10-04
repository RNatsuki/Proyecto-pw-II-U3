import { Request, Response, NextFunction } from "express";
import { Role } from "../models/AuthModel";

export const AdminOnly = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session.user) {
    res.redirect("/login");
    return;
  }

  if (req.session.user.role !== Role.ADMIN) {
    res.redirect("/login");
    return;
  }

  next();
};
