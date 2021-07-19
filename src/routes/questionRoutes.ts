import { CreateQuestionController } from "../controllers/questionControllers/CreateQuestionController";
import { QuestionJoinClubController } from "../controllers/questionControllers/QuestionJoinClubController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListQuestionController } from "../controllers/questionControllers/ListQuestionController";
import { Router } from "express";
import { DeleteQuestionController } from "controllers/questionControllers/DeleteQuestionController";
import { ListAnswersByQuestionController } from "controllers/questionControllers/ListAnswersByQuestionController copy";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController;
const questionJoinClubController = new QuestionJoinClubController;
const listQuestionController = new ListQuestionController;
const deleteQuestionController = new DeleteQuestionController;
const listAnswersByQuestionController = new ListAnswersByQuestionController;

questionRoutes.post("/questions", ensureAuthenticated, createQuestionController.handle);
questionRoutes.post("/questions/join", ensureAuthenticated, questionJoinClubController.handle);

questionRoutes.get("/questions", ensureAuthenticated, listQuestionController.handle);
questionRoutes.get("/questions/answers/:question_id", ensureAuthenticated, listAnswersByQuestionController.handle);

questionRoutes.delete("/questions/:question_id", ensureAuthenticated, deleteQuestionController.handle);

export { questionRoutes };