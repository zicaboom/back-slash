import { CreateClubController } from "@controllers/CreateClubController";
import { CreateUserController } from "@controllers/CreateUserController";
import { Router } from "express";

const routes = Router()

const createUserController = new CreateUserController
const createClubController = new CreateClubController

routes.post("/users", createUserController.handle)
routes.post("/clubs", createClubController.handle)

export { routes }