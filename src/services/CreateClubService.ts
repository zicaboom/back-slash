import { ClubsRepositories } from "src/repositories/ClubsRepositories";
import { UsersRepositories } from "src/repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface ICreateClub{
    name: string
    user: string
}

class CreateClubService{
    async execute({name, user }: ICreateClub){
        const clubsRepository = getCustomRepository(ClubsRepositories)
        const usersRepository = getCustomRepository(UsersRepositories)

        if(!name){
            throw new Error("Incorrect name")
        }

        const clubAlreadyExists = await clubsRepository.findOne({name})

        if(clubAlreadyExists){
            throw new Error("Club already exists")
        }

        const { admin } = await usersRepository.findOne(user)

        const club = clubsRepository.create({
            name,
            created_by: user,
            approved: admin
        })

        await clubsRepository.save(club)

        return club
    }
}

export { CreateClubService }