import { CreateQuestionController } from "../controllers/questionControllers/CreateQuestionController";
import { QuestionJoinClubController } from "../controllers/questionControllers/QuestionJoinClubController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListQuestionController } from "../controllers/questionControllers/ListQuestionController";
import { Router } from "express";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController;
const questionJoinClubController = new QuestionJoinClubController;
const listQuestionController = new ListQuestionController;


questionRoutes.post("/questions", ensureAuthenticated, createQuestionController.handle);
questionRoutes.post("/questions/join", ensureAuthenticated, questionJoinClubController.handle);

questionRoutes.get("/questions", ensureAuthenticated, listQuestionController.handle);

export { questionRoutes };