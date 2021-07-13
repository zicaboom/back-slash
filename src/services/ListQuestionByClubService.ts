import { QuestionClubsRepositories } from "src/repositories/QuestionClubsRepositories";
import { QuestionRepositories } from "src/repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

class ListQuestionByClubService {
    async execute(club: string) {
        const questionRepository = getCustomRepository(QuestionRepositories);

        const questionClubsRepository = getCustomRepository(QuestionClubsRepositories);

        if (club === "all") {
            const questions = await questionRepository.find();
            return {
                questions
            };
        }

        const questionClub = await questionClubsRepository.find({
            club_id: club
        });

        const questions = await questionRepository.findByIds(questionClub.map((question_club) => {
            return question_club.question_id;
        }));

        return {
            questions
        };
    }
}

export { ListQuestionByClubService };