import { AuthenticateUserController } from "../controllers/userControllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/userControllers/CreateUserController";
import { UserJoinClubController } from "../controllers/userControllers/UserJoinClubController";
import { ApproveClubController } from "../controllers/userControllers/ApproveClubController";
import { ListUserController } from "../controllers/userControllers/ListUserController";
import { DeleteUserController } from "../controllers/userControllers/DeleteUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { Router } from "express";

const userRoutes = Router();

const createUserController = new CreateUserController;
const authenticateUserController = new AuthenticateUserController;
const userJoinClubController = new UserJoinClubController;
const approveClubController = new ApproveClubController;
const listUserController = new ListUserController;
const deleteUserController = new DeleteUserController;

userRoutes.post("/users", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.post("/users/join", ensureAuthenticated, userJoinClubController.handle);

userRoutes.get("/users", ensureAuthenticated, listUserController.handle);

userRoutes.put("/clubs/approve", ensureAuthenticated, ensureAdmin, approveClubController.handle);

userRoutes.delete("/users/:delUser", ensureAuthenticated, deleteUserController.handle);

export { userRoutes };

