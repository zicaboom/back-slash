import { CreateQuestionService } from "@services/CreateQuestionService";
import { QuestionJoinClubService } from "@services/QuestionJoinClubService";
import { Request, Response } from "express";

class CreateQuestionController{
    async handle(req: Request, res: Response){
        const user = req.user_id
        const {content}=req.body

        const createQuestionService = new CreateQuestionService

        const question = await createQuestionService.execute({user, content})

        return res.json(question)
    }
}

export{CreateQuestionController}