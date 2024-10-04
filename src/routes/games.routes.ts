import { Router } from "express";
import { showIndex } from "../controllers/GamesController";
const router = Router();

router.get("/", showIndex)

export { router as GamesRouter };
