import { ClubsRepositories } from "../../repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserJoinClub {
    user_id: string,
    clubs_id: string[]
}

class UserJoinClubService {

    async execute({ user_id, clubs_id }: IUserJoinClub) {

        const clubsRepository = getCustomRepository(ClubsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        const userExists = await usersRepository.findOne(user_id, { relations: ["clubs"] });

        const clubs = await clubsRepository.findByIds(clubs_id, {
            where: {
                approved: true
            }
        });

        if (!clubs.length) {
            throw new Error("This clubs don't exists, or don't is approved");
        }

        clubs.forEach((club) => {
            userExists.clubs.push(club);
        });

        await usersRepository.save(userExists);

        const user = await usersRepository.findOne(userExists.id, {relations: ["clubs"]});

        return { user };
    }
}

export { UserJoinClubService };