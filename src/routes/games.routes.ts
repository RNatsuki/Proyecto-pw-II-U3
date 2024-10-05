import { Router } from "express";
import { addGame, showGame, showIndex } from "../controllers/GamesController";
import { upload } from "../utils/multer";
import multer from "multer";

const gameUpload = multer({ dest: "public/games" });

const router = Router();

router.get("/", showIndex)
router.get("/game/:id", showGame)
router.post("/add-game", [upload.array('img'), gameUpload.single('zip')], addGame)

export { router as GamesRouter };
