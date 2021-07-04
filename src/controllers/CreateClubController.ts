import { CreateClubService } from "@services/CreateClubService";
import { Request, Response } from "express";

class CreateClubController{
    async handle(req: Request, res: Response){
        const {name, user_id} = req.body

        const createClubService = new CreateClubService

        const club = await createClubService.execute({name, user_id})

        return res.json(club)
    }
}

export { CreateClubController }