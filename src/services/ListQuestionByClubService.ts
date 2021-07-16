
import { ClubsRepositories } from "../repositories/ClubsRepositories";
import { QuestionRepositories } from "../repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

class ListQuestionByClubService {
    async execute(club_id : string) {
        const questionRepository = getCustomRepository(QuestionRepositories);
        const clubsRepository = getCustomRepository(ClubsRepositories);

        const club = await clubsRepository.findOne(club_id, {relations: ["questions"]});

        if (club_id === "all" || !club) {
            const questions = await questionRepository.find();
            return {
                questions
            };
        }

        const questions = club.questions;

        return {
            questions
        };
    }
}

export { ListQuestionByClubService };