import { Router } from "express";
import { addGame, showGame, showIndex } from "../controllers/GamesController";


const router = Router();

router.get("/", showIndex);
router.get("/game/:id", showGame);
router.post("/add-game", addGame);

export { router as GamesRouter };
