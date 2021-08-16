import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserAnswersService {
    async execute(user_id: string) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.findOne(user_id, {relations: ["answers"]});

        return { users };
    }
}

export { ListUserAnswersService };