import { CreateQuestionService } from "@services/CreateQuestionService";
import { QuestionJoinClubService } from "@services/QuestionJoinClubService";
import { Request, Response } from "express";

class CreateQuestionController{
    async handle(req: Request, res: Response){
        const user = req.user_id
        const {content , clubs_id}=req.body

        const createQuestionService = new CreateQuestionService
        const questionJoinClub = new QuestionJoinClubService

        const question = await createQuestionService.execute({user, content})
        const clubs = await questionJoinClub.execute({question_id: question.id, clubs_id})

        return res.json({question, clubs})
    }
}

export{CreateQuestionController}