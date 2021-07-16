import { ClubsRepositories } from "../../repositories/ClubsRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface ICreateClub {
    name: string
    user_id: string
}

class CreateClubService {
    async execute({ name, user_id}: ICreateClub) {
        const clubsRepository = getCustomRepository(ClubsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!name) {
            throw new Error("Incorrect name");
        }

        const clubAlreadyExists = await clubsRepository.findOne({ name });

        if (clubAlreadyExists) {
            throw new Error("Club already exists");
        }

        const user = await usersRepository.findOne(user_id);

        const club = clubsRepository.create({
            name,
            created_by: user,
            approved: user.admin,
            approved_by: user.admin ? user : null
        });

        await clubsRepository.save(club);

        return { club };
    }
}

export { CreateClubService };