import { ClubsRepositories } from "../../repositories/ClubsRepositories";
import { getCustomRepository } from "typeorm";
import { QuestionRepositories } from "../../repositories/QuestionRepositories";

interface IQuestionJoinClub {
    question_id: string,
    clubs_id: string[]
}

class QuestionJoinClubService {

    async execute({ question_id, clubs_id }: IQuestionJoinClub) {
        const clubsRepository = getCustomRepository(ClubsRepositories);
        const questionsRepository = getCustomRepository(QuestionRepositories);

        const questionExists = await questionsRepository.findOne(question_id, { relations: ["clubs"] });

        if (!questionExists) {
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

        clubs.forEach((club) => {
            questionExists.clubs.push(club);
        });

        await questionsRepository.save(questionExists);

        const question = await questionsRepository.findOne(questionExists.id, {relations:["clubs"]});

        return { question };

    }

}

export { QuestionJoinClubService };