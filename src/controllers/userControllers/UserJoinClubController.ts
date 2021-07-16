import { UserJoinClubService } from "../../services/userServices/UserJoinClubService";
import { Request, Response } from "express";

class UserJoinClubController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;

        const clubs_id = req.body.clubs;

        const userJoinClubService = new UserJoinClubService;

        const joins = await userJoinClubService.execute({user_id, clubs_id});

        return res.json(joins);
    }
}

export { UserJoinClubController };