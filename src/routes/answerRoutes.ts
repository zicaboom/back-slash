import { CreateAnswerController } from "controllers/answerControllers/CreateAnswerController";
import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

const answerRoutes = Router();

const createAnswerController = new CreateAnswerController;

answerRoutes.post("/answers", ensureAuthenticated, createAnswerController.handle);

export { answerRoutes };