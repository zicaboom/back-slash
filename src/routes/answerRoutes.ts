import { CreateAnswerController } from "controllers/answerControllers/CreateAnswerController";
import { DeleteAnswerController } from "controllers/answerControllers/DeleteAnswerController";
import { ListAnswersController } from "controllers/answerControllers/ListAnswersController";
import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";
import { ListAnswersByQuestionController } from "../controllers/answerControllers/ListAnswersByQuestionController";

const answerRoutes = Router();

const createAnswerController = new CreateAnswerController;
const listAnswersController = new ListAnswersController;
const listAnswersByQuestionController = new ListAnswersByQuestionController;
const deleteAnswerController = new DeleteAnswerController;

answerRoutes.post("/answers", ensureAuthenticated, createAnswerController.handle);

answerRoutes.get("/answers", ensureAuthenticated, listAnswersController.handle);
answerRoutes.get("answers/:question_id", ensureAuthenticated, listAnswersByQuestionController.handle);

answerRoutes.delete("/answers/:answer_id", ensureAuthenticated, deleteAnswerController.handle);

export { answerRoutes };