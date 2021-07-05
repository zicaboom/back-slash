import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateClubController } from "@controllers/CreateClubController";
import { CreateUserController } from "@controllers/CreateUserController";
import { UserJoinClubController } from "@controllers/UserJoinClubController";
import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router()

const createUserController = new CreateUserController
const createClubController = new CreateClubController
const authenticateUserController = new AuthenticateUserController
const userJoinClubController = new UserJoinClubController

routes.post("/users", createUserController.handle)
routes.post("/login", authenticateUserController.handle)
routes.post("/clubs", ensureAuthenticated, createClubController.handle)
routes.post("/join", ensureAuthenticated, userJoinClubController.handle)


export { routes }