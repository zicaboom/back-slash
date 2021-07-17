import { Request, Response } from "express";
import { ListQuestionService } from "../../services/questionServices/ListQuestionService";

class ListQuestionController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listQuestionService = new ListQuestionService;

        const questions = await listQuestionService.execute(user_id);

        return res.json(questions);
    }
}

export { ListQuestionController };