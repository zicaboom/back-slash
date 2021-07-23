import { Request, Response } from "express";
import { DeleteAnswerService } from "services/answersServices/DeleteAnswerService";

class DeleteAnswerController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { answer_id } = req.params;

        const deleteAnswerService = new DeleteAnswerService;

        await deleteAnswerService.execute({ answer_id, user_id });

        return res.send();
    }
}

export { DeleteAnswerController };