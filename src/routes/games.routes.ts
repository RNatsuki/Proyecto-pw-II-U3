import { Router } from "express";
import { addGame, showGame, showIndex, showEditGame, deleteGame } from "../controllers/GamesController";


const router = Router();

router.get("/", showIndex);
router.get("/game/:id", showGame);
router.post("/add-game", addGame);
router.get("/edit-game/:id", showEditGame)
router.post("/delete-game/:id", deleteGame);

export { router as GamesRouter };
