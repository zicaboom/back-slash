import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserLikedQuestionsService {
    async execute(user_id: string) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.findOne(user_id, {relations: ["liked_questions"]});

        return { users };
    }
}

export { ListUserLikedQuestionsService };