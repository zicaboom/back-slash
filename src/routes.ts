import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateClubController } from "./controllers/CreateClubController";
import { CreateQuestionController } from "./controllers/CreateQuestionController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListClubController } from "./controllers/ListClubController";
import { QuestionJoinClubController } from "./controllers/QuestionJoinClubController";
import { UserJoinClubController } from "./controllers/UserJoinClubController";
import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ApproveClubController } from "./controllers/ApproveClubController";

const routes = Router()

const createUserController = new CreateUserController
const createClubController = new CreateClubController
const authenticateUserController = new AuthenticateUserController
const userJoinClubController = new UserJoinClubController
const createQuestionController = new CreateQuestionController
const questionJoinClubController = new QuestionJoinClubController
const listClubController = new ListClubController
const approveClubController = new ApproveClubController

routes.post("/users", createUserController.handle)
routes.post("/login", authenticateUserController.handle)
routes.post("/clubs", ensureAuthenticated, createClubController.handle)
routes.post("/users/join", ensureAuthenticated, userJoinClubController.handle)
routes.post("/questions", ensureAuthenticated, createQuestionController.handle)
routes.post("/questions/join", ensureAuthenticated,questionJoinClubController.handle)

routes.get("/clubs", ensureAuthenticated, listClubController.handle)

routes.put("/clubs/approve", ensureAuthenticated, ensureAdmin, approveClubController.handle)

export { routes }