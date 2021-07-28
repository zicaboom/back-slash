import { QuestionRepositories } from "repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

class ListQuestionService {
    async execute() {
        const questionsRepository = getCustomRepository(QuestionRepositories);

        const questions = await questionsRepository.find();

        return { questions };
    }
}

export { ListQuestionService };