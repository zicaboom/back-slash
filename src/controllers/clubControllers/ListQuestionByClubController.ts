import { Request, Response } from "express";
import { ListQuestionByClubService } from "../../services/clubServices/ListQuestionByClubService";


class ListQuestionByClubController{
    async handle(req: Request, res: Response){
        const  { club }  = req.params;

        const listQuestionService = new ListQuestionByClubService;

        const questions = await listQuestionService.execute(club);

        return res.json(questions);
    }
}

export { ListQuestionByClubController };