import { Request, Response } from "express";
import { DeleteUserService } from "../../services/userServices/DeleteUserService";


class DeleteUserController {
    async handle(req: Request, res: Response) {

        const reqUser = req.user_id;

        const delUser = req.body.id;

        const deleteUserService = new DeleteUserService;

        const deleted = await deleteUserService.execute({ reqUser, delUser });

        return res.json(deleted);
    }
}

export { DeleteUserController };