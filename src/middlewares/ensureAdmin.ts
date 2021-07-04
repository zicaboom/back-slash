import { NextFunction, Request, Response } from "express";
import { UsersRepositories } from "src/repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction ){
    const user = req.user_id

    const usersRepository = getCustomRepository(UsersRepositories)

    const { admin } = await usersRepository.findOne(user)

    if(!admin){
        return res.status(401).end()
    }

    return next()
}