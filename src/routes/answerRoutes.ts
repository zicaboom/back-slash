import { CreateAnswerController } from "controllers/answerControllers/CreateAnswerController";
import { DeleteAnswerController } from "controllers/answerControllers/DeleteAnswerController";
import { ListAnswerController } from "controllers/answerControllers/ListAnswerController";
import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

const answerRoutes = Router();

const createAnswerController = new CreateAnswerController;
const listAnswerController = new ListAnswerController;
const deleteAnswerController = new DeleteAnswerController;

answerRoutes.post("/answers", ensureAuthenticated, createAnswerController.handle);

answerRoutes.get("/answers/:answer_id", ensureAuthenticated, listAnswerController.handle);

answerRoutes.delete("/answers/:answer_id", ensureAuthenticated, deleteAnswerController.handle);

export { answerRoutes };