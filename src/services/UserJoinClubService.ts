import { ClubsRepositories } from "../repositories/ClubsRepositories";

import { UserClubsRepositories } from "../repositories/UserClubsRepositories";

import { getCustomRepository } from "typeorm";

interface IUserJoinClub {

    user_id: string,

    clubs_id: string[]

}

class UserJoinClubService {

    async execute({ user_id, clubs_id }: IUserJoinClub) {

        const userClubsRepository = getCustomRepository(UserClubsRepositories);

        const clubsRepository = getCustomRepository(ClubsRepositories);

        const clubs = await clubsRepository.findByIds(clubs_id, {
            where: {
                approved: true
            }
        });

        if (!clubs.length) {

            throw new Error("This clubs don't exists, or don't is approved");

        }

        const userClubs = (await userClubsRepository.find({ user_id })).map((user_club) => {
            return user_club.club_id;
        });


        const makeJoins = clubs.map((club) => {
            const userAlreadyOnClub = userClubs.indexOf(club.id);

            if(userAlreadyOnClub >= 0 ){
                throw new Error(`User already on club '${club.name}'`);
            }

            return {
                user_id,
                club_id: club.id
            };
        });

        const joins = userClubsRepository.create(makeJoins);

        await userClubsRepository.save(joins);

        return { joins };

    }

}



export { UserJoinClubService };