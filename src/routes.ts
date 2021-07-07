import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateClubController } from "@controllers/CreateClubController";
import { CreateQuestionController } from "@controllers/CreateQuestionController";
import { CreateUserController } from "@controllers/CreateUserController";
import { UserJoinClubController } from "@controllers/UserJoinClubController";
import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router()

const createUserController = new CreateUserController
const createClubController = new CreateClubController
const authenticateUserController = new AuthenticateUserController
const userJoinClubController = new UserJoinClubController
const createQuestionController = new CreateQuestionController

routes.post("/users", createUserController.handle)
routes.post("/login", authenticateUserController.handle)
routes.post("/clubs", ensureAuthenticated, createClubController.handle)
routes.post("/join", ensureAuthenticated, userJoinClubController.handle)
routes.post("/questions", ensureAuthenticated, createQuestionController.handle)

export { routes }