import { Router } from "express";
import { addPlayer, allPlayers } from "../controllers/playerController.js";

const playerRouter = Router();

playerRouter.get('/', allPlayers)
playerRouter.post('/', addPlayer)


export default playerRouter