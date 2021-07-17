import { CreateClubService } from "../../services/clubServices/CreateClubService";
import { Request, Response } from "express";

class CreateClubController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { name } = req.body;

        const createClubService = new CreateClubService;

        const club = await createClubService.execute({ name, user_id });

        return res.json(club);
    }
}

export { CreateClubController };