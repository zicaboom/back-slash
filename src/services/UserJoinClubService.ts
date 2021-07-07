import { ClubsRepositories } from "../repositories/ClubsRepositories"
import { UserClubsRepositories } from "../repositories/UserClubsRepositories"
import { getCustomRepository } from "typeorm"

interface IUserJoinClub{
    user_id: string,
    club_id: string
}

class UserJoinClubService{
    async execute({user_id, club_id}: IUserJoinClub){
        const userClubsRepository = getCustomRepository(UserClubsRepositories)
        const clubRepository = getCustomRepository(ClubsRepositories)

        const club = await clubRepository.findOne(club_id)

        if(!club){
            throw new Error("Club don't exists")
        }

        if(!club.approved){
            throw new Error("Club don't is approved")
        }

        const userOnClub = await userClubsRepository.findOne({user_id, club_id})

        if(userOnClub){
            throw new Error("User already on club")
        }

        const userClub = userClubsRepository.create({
            user_id,
            club_id
        })

        await userClubsRepository.save(userClub)

        const join = await userClubsRepository.findOne({user_id, club_id}, { relations: ["clubId"] })

        return join
    }
}

export { UserJoinClubService }