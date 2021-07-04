import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateClubController } from "@controllers/CreateClubController";
import { CreateUserController } from "@controllers/CreateUserController";
import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router()

const createUserController = new CreateUserController
const createClubController = new CreateClubController
const authenticateUserController = new AuthenticateUserController

routes.post("/users", createUserController.handle)
routes.post("/clubs", ensureAuthenticated, createClubController.handle)
routes.post("/login", authenticateUserController.handle)

export { routes }