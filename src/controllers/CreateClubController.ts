import { CreateClubService } from "../services/CreateClubService";
import { Request, Response } from "express";

class CreateClubController{
    async handle(req: Request, res: Response){
        const user = req.user_id 

        const {name} = req.body

        const createClubService = new CreateClubService

        const club = await createClubService.execute({name, user})

        return res.json(club)
    }
}

export { CreateClubController }