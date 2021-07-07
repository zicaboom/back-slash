import { ClubsRepositories } from "../repositories/ClubsRepositories";
import { QuestionClubsRepositories } from "../repositories/QuestionClubsRepositories";
import { getCustomRepository } from "typeorm";
import { QuestionRepositories } from "@repositories/QuestionRepositories";

interface IQuestionJoinClub{
    question_id: string,
    clubs_id: string[]
}

class QuestionJoinClubService{
    async execute({question_id, clubs_id}: IQuestionJoinClub){
        const questionClubsRepository = getCustomRepository(QuestionClubsRepositories)
        const clubsRepository =  getCustomRepository(ClubsRepositories)
        const questionsRepository = getCustomRepository(QuestionRepositories)

        if(!clubs_id.length){
            await questionsRepository.delete(question_id)
            throw new Error("Question clubs incorrect")
        }

        const removeClubsRepetitions = new Set(clubs_id)

        clubs_id = [...removeClubsRepetitions]

        let errors = []

        for (let i in clubs_id){
            const club_id = clubs_id[i]

            const club = await clubsRepository.findOne(club_id)

            if(club){
                if(club.approved){
                    const join = questionClubsRepository.create({
                        club_id,
                        question_id
                    })

                    await questionClubsRepository.save(join)   
                }else{
                    errors.push(`Club id:${club_id}, don't is approved`)
                }
            }else{
                errors.push(`Club id:${club_id}, don't exists`)
            }
        }

        const joins = await questionClubsRepository.find({
            where: {question_id},
            relations: ["clubId"]
        })

        if(!joins.length){
            await questionsRepository.delete(question_id)
            throw new Error("Not able to create question, try again")
        }

        return {joins, errors}
    }
}

export { QuestionJoinClubService }