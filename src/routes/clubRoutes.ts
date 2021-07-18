import { CreateClubController } from "../controllers/clubControllers/CreateClubController";
import { ListClubController } from "../controllers/clubControllers/ListClubController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListQuestionByClubController } from "../controllers/clubControllers/ListQuestionByClubController";
import { Router } from "express";
import { DeleteClubController } from "controllers/clubControllers/DeleteClubController";

const clubRoutes = Router();

const createClubController = new CreateClubController;
const listClubController = new ListClubController;
const listQuestionByClubController = new ListQuestionByClubController;
const deleteClubController = new DeleteClubController;

clubRoutes.post("/clubs", ensureAuthenticated, createClubController.handle);

clubRoutes.get("/questions/:club", ensureAuthenticated, listQuestionByClubController.handle);
clubRoutes.get("/clubs", ensureAuthenticated, listClubController.handle);

clubRoutes.delete("/clubs/:club_id", ensureAuthenticated, deleteClubController.handle);

export { clubRoutes };