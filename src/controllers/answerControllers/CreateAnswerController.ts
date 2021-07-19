import { Request, Response } from "express";
import { CreateAnswerService } from "services/answersServices/CreateAnswerService";

class CreateAnswerController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { content, question_id } = req.body;

        const createAnswerService = new CreateAnswerService;

        const answer = await createAnswerService.execute({ content, question_id, user_id });

        return res.json(answer);
    }
}

export { CreateAnswerController };