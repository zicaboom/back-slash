import { Request, Response } from "express";
import { ListUserLikedQuestionsService } from "../../services/userServices/ListUserLikedQuestionsService";

class ListUserLikedQuestionsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserLikedQuestionsService = new ListUserLikedQuestionsService;

        const user = await listUserLikedQuestionsService.execute(user_id);

        return res.json(user);
    }
}

export { ListUserLikedQuestionsController };