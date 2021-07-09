import { classToClass } from "class-transformer";
import { UsersRepositories } from "src/repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserService{
    async execute(){
        const usersRepository = getCustomRepository(UsersRepositories)

        const users = await usersRepository.find()

        const usersInfos = classToClass(users)

        return { usersInfos }
    }
}

export { ListUserService }