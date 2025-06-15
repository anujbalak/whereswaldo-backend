import { Router } from "express";
import { getAllEasyCharacters, postEasyGame } from "../controllers/EasyGameController.js";

const gameRouter= Router();

gameRouter.get('/easy/characters', getAllEasyCharacters)
gameRouter.post('/easy', postEasyGame);

export default gameRouter;