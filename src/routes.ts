import { CreateUserController } from "@controllers/CreateUserController";
import { Router } from "express";

const routes = Router()

const createUserController = new CreateUserController

routes.post("/users", createUserController.handle)

export { routes }