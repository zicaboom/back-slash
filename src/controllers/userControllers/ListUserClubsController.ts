import { Request, Response } from "express";
import { ListUserClubsService } from "../../services/userServices/ListUserClubsService";

class ListUserClubsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserClubsService = new ListUserClubsService;

        const user = await listUserClubsService.execute(user_id);

        return res.json(user);
    }
}

export { ListUserClubsController };