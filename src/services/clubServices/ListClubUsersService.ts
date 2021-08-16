import { ClubsRepositories } from "repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";

class ListClubUsersService {

    async execute(club_id: string) {
        const clubsRepository = getCustomRepository(ClubsRepositories);

        const club = await clubsRepository.findOne(club_id, {
            where: {approved: true},
            relations: ["users"]
        });

        return { club };
    }

}

export { ListClubUsersService };