import { Request, Response } from "express";
import { ListQuestionClubsService } from "../../services/questionServices/ListQuestionClubsService";

class ListQuestionClubsController{
    async handle(req: Request, res: Response){
        const  { question_id }  = req.params;

        const listQuestionClubsService = new ListQuestionClubsService;

        const question = await listQuestionClubsService.execute(question_id);

        return res.json(question);
    }
}

export { ListQuestionClubsController };