import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserLikedAnswersService {
    async execute(user_id: string) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.findOne(user_id, {relations: ["liked_answers"]});

        return { users };
    }
}

export { ListUserLikedAnswersService };