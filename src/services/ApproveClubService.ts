import { ClubsRepositories } from "../repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";

interface IApproveClub{
    user: string,
    clubs_id: string[]
}

class ApproveClubService{
    async execute({user, clubs_id}: IApproveClub){

        const clubsRepository = getCustomRepository(ClubsRepositories)

        const clubs = await clubsRepository.findByIds(clubs_id,{
            where: {
                approved: false
            }
        })

        if(!clubs.length){
            throw new Error("This clubs don't exists, or already approved")
        }

        await clubsRepository.update(clubs.map(club =>{
            return  !club.approved ? club.id : null
        }),{
            approved: true,
            approved_by: user
        })

        const approved = await clubsRepository.findByIds(clubs_id)

        return { approved }
    }
}

export { ApproveClubService }