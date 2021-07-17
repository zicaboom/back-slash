import { ClubsRepositories } from "repositories/ClubsRepositories";
import { UsersRepositories } from "repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IDeleteClub {
    club_id: string
    user_id: string
}
class DeleteClubService {
    async execute({ club_id, user_id }: IDeleteClub) {
        const clubsRepository = getCustomRepository(ClubsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        const club = await clubsRepository.findOne(club_id);
        const user = await usersRepository.findOne(user_id);

        if (club.created_by != user && !user.admin) {
            throw new Error("Unauthorized");
        }

        await clubsRepository.delete(club.id);

        return { club };
    }
}

export { DeleteClubService };