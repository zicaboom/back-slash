import { AuthenticateUserService } from "../../services/userServices/AuthenticateUserService";
import { Request, Response } from "express";

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authenticateUserService = new AuthenticateUserService;

        const token = await authenticateUserService.execute({ email, password });

        return res.json(token);
    }
}

export { AuthenticateUserController };