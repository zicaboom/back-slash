import { UserJoinClubService } from "../services/UserJoinClubService";
import { Request, Response } from "express";

class UserJoinClubController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id

        const club_id = req.body.club

        const userJoinClubService = new UserJoinClubService

        const userClub = await userJoinClubService.execute({user_id, club_id})

        return res.json(userClub)
    }
}

export { UserJoinClubController }