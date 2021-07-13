import { QuestionJoinClubService } from "../services/QuestionJoinClubService";
import { Request, Response } from "express";


class QuestionJoinClubController{
    async handle(req: Request, res:Response){
        const { question_id, clubs_id } = req.body;

        const questionJoinClubService = new QuestionJoinClubService;
        
        const joins = await questionJoinClubService.execute({ question_id, clubs_id});

        return res.json(joins);
    }
}

export { QuestionJoinClubController };