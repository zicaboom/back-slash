import { Request, Response } from "express";
import { ListUserAnswersService } from "../../services/userServices/ListUserAnswersService";

class ListUserAnswersController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserAnswersService = new ListUserAnswersService;

        const user = await listUserAnswersService.execute(user_id);

        return res.json(user);
    }
}

export { ListUserAnswersController };