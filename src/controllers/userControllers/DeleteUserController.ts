import { Request, Response } from "express";
import { DeleteUserService } from "../../services/userServices/DeleteUserService";


class DeleteUserController {
    async handle(req: Request, res: Response) {

        const reqUser = req.user_id;

        const { delUser } = req.params;

        const deleteUserService = new DeleteUserService;

        await deleteUserService.execute({ reqUser, delUser });

        return res.send();
    }
}

export { DeleteUserController };