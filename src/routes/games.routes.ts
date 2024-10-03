import { Router } from "express";
import { showGame, showIndex } from "../controllers/GamesController";
const router = Router();

router.get("/", showIndex)
router.get("/game/:id", showGame)
export { router as GamesRouter };
