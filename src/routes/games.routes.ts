import { Router } from "express";
import { addGame, showGame, showIndex, showEditGame } from "../controllers/GamesController";


const router = Router();

router.get("/", showIndex);
router.get("/game/:id", showGame);
router.post("/add-game", addGame);
router.get("/edit-game/:id", showEditGame)
export { router as GamesRouter };
