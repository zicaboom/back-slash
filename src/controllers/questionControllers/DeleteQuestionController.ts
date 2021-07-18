import { Request, Response } from "express";
import { DeleteQuestionService } from "services/questionServices/DeleteQuestionService";

class DeleteQuestionController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { question_id } = req.params;

        const deleteQuestionService = new DeleteQuestionService;

        await deleteQuestionService.execute({ user_id, question_id });

        return res.send();
    }
}

export { DeleteQuestionController };