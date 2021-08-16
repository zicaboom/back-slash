import { ClubsRepositories } from "../../repositories/ClubsRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

class ListClubService {
    async execute(user_id: string) {

        const usersRepository = getCustomRepository(UsersRepositories);
        const clubsRepository = getCustomRepository(ClubsRepositories);

        const { admin } = await usersRepository.findOne(user_id);

        // se o usuário for admin ele tem acesso aos clubes desaprovados 
        if (admin) {
            const clubs = await clubsRepository.find();
            return { clubs };
        }

        // se não apenas aos clubes aprovados
        const clubs = await clubsRepository.find({
            where: {approved: true}
        });

        return { clubs };
    }
}

export { ListClubService };