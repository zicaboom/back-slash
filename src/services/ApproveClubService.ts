import { ClubsRepositories } from "@repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";

interface IApproveClub{
    user: string,
    club_id: string
}

class ApproveClubService{
    async execute({user, club_id}: IApproveClub){

        const clubsRepository = getCustomRepository(ClubsRepositories)

        const club = await clubsRepository.findOne(club_id)

        if(!club){
            throw new Error("This club don't exists")
        }

        if(club.approved){
            throw new Error("This club already approved")
        }

        await clubsRepository.update(
            club_id,{
            approved: true,
            approved_by: user,
            updated_at: Date.now()
        })

        return {
            approved: true,
            approved_by: user
        }
    }
}

export { ApproveClubService }