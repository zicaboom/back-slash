import { Request, Response } from "express";
import { ListClubQuestionsService } from "services/clubServices/ListClubQuestionsService";

class ListClubQuestionsController {
    async handle(req: Request, res: Response) {
        const { club_id } = req.params;

        const listClubQuestionsService = new ListClubQuestionsService;

        const club = await listClubQuestionsService.execute(club_id);

        return res.json(club);
    }
}

export { ListClubQuestionsController };