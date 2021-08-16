import { UserJoinClubService } from "../../services/userServices/UserJoinClubsService";
import { Request, Response } from "express";

class UserJoinClubController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const clubs_id = req.body.clubs;

        const userJoinClubService = new UserJoinClubService;

        const user = await userJoinClubService.execute({ user_id, clubs_id });

        return res.json(user);
    }
}

export { UserJoinClubController };