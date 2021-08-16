import { AuthenticateUserController } from "../controllers/userControllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/userControllers/CreateUserController";
import { UserJoinClubController } from "../controllers/userControllers/UserJoinClubController";
import { ListUserController } from "../controllers/userControllers/ListUserController";
import { ListUserQuestionsController } from "../controllers/userControllers/ListUserQuestionsController";
import { ListUserClubsController } from "../controllers/userControllers/ListUserClubsController";
import { ListUserAnswersController } from "../controllers/userControllers/ListUserAnswersController";
import { ListUserLikedAnswersController } from "../controllers/userControllers/ListUserLikedAnswersController";
import { ListUserLikedQuestionsController } from "../controllers/userControllers/ListUserLikedQuestionsController";
import { DeleteUserController } from "../controllers/userControllers/DeleteUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { Router } from "express";

const userRoutes = Router();

const createUserController = new CreateUserController;
const authenticateUserController = new AuthenticateUserController;
const userJoinClubController = new UserJoinClubController;

const listUserController = new ListUserController;
const listUserQuestionsController = new ListUserQuestionsController;
const listUserClubsController = new ListUserClubsController;
const listUserAnswersController = new ListUserAnswersController;
const listUserLikedQuestionsController = new ListUserLikedQuestionsController;
const listUserLikedAnswersController = new ListUserLikedAnswersController;
const deleteUserController = new DeleteUserController;

userRoutes.post("/users", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.post("/users/join", ensureAuthenticated, userJoinClubController.handle);

userRoutes.get("/users", ensureAuthenticated, listUserController.handle);
userRoutes.get("/users/questions", ensureAuthenticated, listUserQuestionsController.handle);
userRoutes.get("/users/clubs", ensureAuthenticated, listUserClubsController.handle);
userRoutes.get("/users/answers", ensureAuthenticated, listUserAnswersController.handle);
userRoutes.get("/users/liked_answers", ensureAuthenticated, listUserLikedAnswersController.handle);
userRoutes.get("/users/liked_questions", ensureAuthenticated, listUserLikedQuestionsController.handle);

userRoutes.delete("/users/:delUser", ensureAuthenticated, deleteUserController.handle);

export { userRoutes };

