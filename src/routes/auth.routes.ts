import { Router } from "express";
import { showLogin } from "../controllers/AuthController";
const router = Router();

router.get("/login", showLogin);

export { router as AuthRouter };
