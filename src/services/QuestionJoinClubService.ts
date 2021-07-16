import { ClubsRepositories } from "../repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";
import { QuestionRepositories } from "../repositories/QuestionRepositories";

interface IQuestionJoinClub {
    question_id: string,
    clubs_id: string[]
}

class QuestionJoinClubService {

    async execute({ question_id, clubs_id }: IQuestionJoinClub) {
        const clubsRepository = getCustomRepository(ClubsRepositories);
        const questionsRepository = getCustomRepository(QuestionRepositories);

        const question = await questionsRepository.findOne(question_id, {relations: ["clubs"]});

        if (!question) {
            throw new Error("Question don't exists");
        }

        const clubs = await clubsRepository.findByIds(clubs_id, {
            where: {
                approved: true
            }
        });

        if (!clubs.length) {
            throw new Error("This clubs don't exists, or don't is approved");
        }

        clubs.forEach((club)=>{
            question.clubs.push(club);
        });

        await questionsRepository.save(question);

        return { question };

    }

}

export { QuestionJoinClubService };