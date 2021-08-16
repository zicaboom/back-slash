import { Request, Response } from "express";
import { ListUserQuestionsService } from "../../services/userServices/ListUserQuestionsService";

class ListUserQuestionsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserQuestionsService = new ListUserQuestionsService;

        const user = await listUserQuestionsService.execute(user_id);

        return res.json(user);
    }
}

export { ListUserQuestionsController };