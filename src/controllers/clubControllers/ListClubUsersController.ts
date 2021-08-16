import { Request, Response } from "express";
import { ListClubUsersService } from "services/clubServices/ListClubUsersService";

class ListClubUsersController {
    async handle(req: Request, res: Response) {
        const { club_id } = req.params;

        const listClubUsersService = new ListClubUsersService;

        const club = await listClubUsersService.execute(club_id);

        return res.json(club);
    }
}

export { ListClubUsersController };