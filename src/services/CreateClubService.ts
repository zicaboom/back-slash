import { ClubsRepositories } from "src/repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";

class CreateClubService{
    async execute({name, user_id}){
        const clubsRepository = getCustomRepository(ClubsRepositories)

        if(!name){
            throw new Error("Incorrect name")
        }

        const clubAlreadyExists = await clubsRepository.findOne({name})

        if(clubAlreadyExists){
            throw new Error("Club already exists")
        }

        const club = clubsRepository.create({
            name,
            created_by: user_id
        })

        await clubsRepository.save(club)

        return club
    }
}

export { CreateClubService }