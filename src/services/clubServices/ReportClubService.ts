import { ClubsRepositories } from "../../repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IReportClub {
    user_id: string,
    club_id: string
}

class ReportClubService {
    async execute({ user_id, club_id }: IReportClub) {
        const clubsRepository = getCustomRepository(ClubsRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne(user_id);
        const club = await clubsRepository.findOne(club_id, {relations: ["reports"]});

        if(!club){
            throw new Error("Club not exists!");
        }

        club.reports.push(user);
        
        await clubsRepository.save(club);

        return club;
    }
}

export { ReportClubService };