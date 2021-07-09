import { Request, Response } from "express";
import { ListUserService } from "src/services/ListUserService";

class ListUserController{
    async handle(_: Request, res:Response){
        const listUserService = new ListUserService

        const users = await listUserService.execute()

        res.json(users)
    }
}

export { ListUserController }