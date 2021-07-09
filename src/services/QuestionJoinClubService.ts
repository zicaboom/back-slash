import { ClubsRepositories } from "../repositories/ClubsRepositories";
import { QuestionClubsRepositories } from "../repositories/QuestionClubsRepositories";
import { getCustomRepository } from "typeorm";
import { QuestionRepositories } from "../repositories/QuestionRepositories";

interface IQuestionJoinClub{
    question_id: string,
    clubs_id: string[]
}

class QuestionJoinClubService{
    async execute({question_id, clubs_id}: IQuestionJoinClub){
        const questionClubsRepository = getCustomRepository(QuestionClubsRepositories)
        const clubsRepository =  getCustomRepository(ClubsRepositories)
        const questionsRepository = getCustomRepository(QuestionRepositories)

        const question = await questionsRepository.findOne(question_id)

        if(!question){
            throw new Error("Question don't exists")
        }

        const clubs = await clubsRepository.findByIds(clubs_id, {
            where: {
                approved: true
            }
        })

        if(!clubs.length){
            throw new Error("This clubs don't exists, or don't is approved")
        }

        const joins = questionClubsRepository.create(clubs.map((club)=>{
            return {
                question_id,
                club_id: club.id
            }
        }))

        await questionClubsRepository.save(joins)

        return {joins}
    }
}

export { QuestionJoinClubService }