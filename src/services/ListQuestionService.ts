import { QuestionRepositories } from "src/repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

class ListQuestionService {
    async execute(user: string) {

        const questionRepository = getCustomRepository(QuestionRepositories);

        const questions = await questionRepository.find({ created_by: user });

        return { questions };
    }
}

export { ListQuestionService };