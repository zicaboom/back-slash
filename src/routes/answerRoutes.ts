import { CreateAnswerController } from "controllers/answerControllers/CreateAnswerController";
import { ListAnswersController } from "controllers/answerControllers/ListAnswersController";
import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

const answerRoutes = Router();

const createAnswerController = new CreateAnswerController;
const listAnswersController = new ListAnswersController;

answerRoutes.post("/answers", ensureAuthenticated, createAnswerController.handle);

answerRoutes.get("/answers", ensureAuthenticated,listAnswersController.handle);

export { answerRoutes };