import { Request, Response } from "express";
import { ListAnswersService } from "services/answersServices/ListAnswersService";


class ListAnswersController {
    async handle(_: Request, res: Response) {     

        const listAnswersService = new ListAnswersService;

        const answers = await listAnswersService.execute();

        return res.json(answers);
    }
}

export { ListAnswersController };