import { ListClubService } from "../../services/clubServices/ListClubService";
import { Request, Response } from "express";


class ListClubController{
    async handle(req: Request, res: Response){
        const { user_id } = req;

        const listClubService = new ListClubService;

        const clubs = await listClubService.execute(user_id);

        return res.json(clubs);
    }
}

export{ ListClubController };