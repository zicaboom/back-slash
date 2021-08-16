import { Request, Response } from "express";
import { ListAnswerService } from "services/answersServices/ListAnswerService";

class ListAnswerController {
    async handle(req: Request, res: Response) {
        const { answer_id } = req.params;

        const listAnswerService = new ListAnswerService;

        const answer = await listAnswerService.execute(answer_id);

        return res.json(answer);
    }
}

export { ListAnswerController };