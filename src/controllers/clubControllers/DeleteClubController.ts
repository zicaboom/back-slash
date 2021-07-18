import { Request, Response } from "express";
import { DeleteClubService } from "services/clubServices/DeleteClubService";

class DeleteClubController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { club_id } = req.params;

        const deleteClubService = new DeleteClubService;

        await deleteClubService.execute({ user_id, club_id });

        return res.send();
    }
}

export { DeleteClubController };