import { CreateQuestionService } from "../../services/questionServices/CreateQuestionService";
import { Request, Response } from "express";

class CreateQuestionController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        const {content}=req.body;

        const createQuestionService = new CreateQuestionService;

        const question = await createQuestionService.execute({user_id, content});

        return res.json(question);
    }
}

export{CreateQuestionController};