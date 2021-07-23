import { CreateQuestionController } from "../controllers/questionControllers/CreateQuestionController";
import { QuestionJoinClubController } from "../controllers/questionControllers/QuestionJoinClubController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListQuestionController } from "../controllers/questionControllers/ListQuestionController";
import { Router } from "express";
import { DeleteQuestionController } from "controllers/questionControllers/DeleteQuestionController";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController;
const questionJoinClubController = new QuestionJoinClubController;
const listQuestionController = new ListQuestionController;
const deleteQuestionController = new DeleteQuestionController;

questionRoutes.post("/questions", ensureAuthenticated, createQuestionController.handle);
questionRoutes.post("/questions/join", ensureAuthenticated, questionJoinClubController.handle);

questionRoutes.get("/questions", ensureAuthenticated, listQuestionController.handle);

questionRoutes.delete("/questions/:question_id", ensureAuthenticated, deleteQuestionController.handle);

export { questionRoutes };