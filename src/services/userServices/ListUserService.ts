import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.find();

        return { users };
    }
}

export { ListUserService };