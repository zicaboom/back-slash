import { ApproveClubService } from "../services/ApproveClubService";
import { Request, Response } from "express";


class ApproveClubController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const { clubs_id } = req.body;

        const approveClubService = new ApproveClubService;

        const approved = await approveClubService.execute({ user_id, clubs_id });

        return res.json(approved);
    }
}

export { ApproveClubController };