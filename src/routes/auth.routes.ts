import { NextFunction, Router } from "express";
import { AdminOnly } from "../middlewares/AuthMiddleware";
import { login, showDashboard, showLogin } from "../controllers/AuthController";
const router = Router();

router.get("/login",showLogin);
router.post("/login", login);
//middlware
router.get("/dashboard", [AdminOnly], showDashboard);
router.get("/manuel", [AdminOnly], (req: Request, res: any) => {
  res.send("Hola manuel");
});
export { router as AuthRouter };
