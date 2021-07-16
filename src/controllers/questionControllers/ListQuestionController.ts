import { Request, Response } from "express";
import { ListQuestionService } from "../../services/questionServices/ListQuestionService";

class ListQuestionController {
    async handle(req: Request, res: Response) {
        const user = req.user_id;

        const listQuestionService = new ListQuestionService;

        const questions = await listQuestionService.execute(user);

        return res.json(questions);
    }
}

export { ListQuestionController };