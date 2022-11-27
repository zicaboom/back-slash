
import { Request, Response } from "express";
import { ReportClubService } from "services/clubServices/ReportClubService";


class ReportClubController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const { club_id } = req.body;

        const reportClubService = new ReportClubService;

        const clubs = await reportClubService.execute({ user_id, club_id });

        return res.json(clubs);
    }
}

export { ReportClubController };