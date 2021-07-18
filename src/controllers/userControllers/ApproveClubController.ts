import { ApproveClubService } from "../../services/userServices/ApproveClubService";
import { Request, Response } from "express";


class ApproveClubController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { clubs_id } = req.body;

        const approveClubService = new ApproveClubService;

        const clubs = await approveClubService.execute({ user_id, clubs_id });

        return res.json(clubs);
    }
}

export { ApproveClubController };