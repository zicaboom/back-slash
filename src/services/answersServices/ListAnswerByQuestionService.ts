import { QuestionRepositories } from "repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

class ListAnswersByQuestionsService {
    async execute(question_id: string) {
        const questionsRepository = getCustomRepository(QuestionRepositories);

        const question = await questionsRepository.findOne(question_id, { relations: ["answers"] });

        if (!question) {
            throw new Error("This question don't exists");
        }

        return { question };
    }
}

export { ListAnswersByQuestionsService };