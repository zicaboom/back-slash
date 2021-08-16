import { QuestionRepositories } from "../../repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

class ListQuestionClubsService {
    async execute(question_id : string) {
        const questionRepository = getCustomRepository(QuestionRepositories);

        const question = await questionRepository.findOne(question_id, {relations: ["clubs"]});
        
        return { question };
    }
}

export { ListQuestionClubsService };