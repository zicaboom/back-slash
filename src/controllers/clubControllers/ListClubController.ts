import { ListClubService } from "../../services/clubServices/ListClubService";
import { Request, Response } from "express";


class ListClubController{
    async handle(req: Request, res: Response){
        const user = req.user_id;

        const listClubService = new ListClubService;

        const clubs = await listClubService.execute(user);

        return res.json(clubs);
    }
}

export{ ListClubController };