import { Router } from "express";
import { startGame } from "../controllers/startController.js";

const startRouter = Router();

startRouter.get('/', startGame);

export default startRouter;