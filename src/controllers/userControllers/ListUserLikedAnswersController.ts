import { Request, Response } from "express";
import { ListUserLikedAnswersService } from "../../services/userServices/ListUserLikedAnswersService";

class ListUserLikedAnswersController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserLikedAnswersService = new ListUserLikedAnswersService;

        const user = await listUserLikedAnswersService.execute(user_id);

        return res.json(user);
    }
}

export { ListUserLikedAnswersController };