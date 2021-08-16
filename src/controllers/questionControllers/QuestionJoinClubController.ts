import { QuestionJoinClubService } from "../../services/questionServices/QuestionJoinClubsService";
import { Request, Response } from "express";

class QuestionJoinClubController{
    async handle(req: Request, res:Response){
        const { question_id, clubs_id } = req.body;

        const questionJoinClubService = new QuestionJoinClubService;
        
        const question = await questionJoinClubService.execute({ question_id, clubs_id});

        return res.json(question);
    }
}

export { QuestionJoinClubController };