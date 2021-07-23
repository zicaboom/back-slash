import { Request, Response } from "express";
import { ListAnswersByQuestionsService } from "services/answersServices/ListAnswerByQuestionService";


class ListAnswersByQuestionController {
    async handle(req: Request, res: Response) {
        const { question_id } = req.params;

        const listAnswersService = new ListAnswersByQuestionsService;

        const question = await listAnswersService.execute(question_id);

        return res.json(question);
    }
}

export { ListAnswersByQuestionController };