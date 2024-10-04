import { Router } from "express";
import { AdminOnly } from "../middlewares/AuthMiddleware";
import { login, showDashboard, showLogin } from "../controllers/AuthController";
const router = Router();

router.get("/login", showLogin);
router.post("/login", login);
router.get("/dashboard", [AdminOnly], showDashboard);
export { router as AuthRouter };
