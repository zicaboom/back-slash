import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";


class ListUserClubsService {
    async execute(user_id: string) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const users = await usersRepository.findOne(user_id, {relations: ["clubs"]});

        return { users };
    }
}

export { ListUserClubsService };