import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserQuestionsService {
    async execute(user_id: string) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.findOne(user_id, {relations: ["questions"]});

        return { users };
    }
}

export { ListUserQuestionsService };