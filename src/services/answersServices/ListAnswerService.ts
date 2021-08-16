import { AnswersRepositories } from "repositories/AnswersRepositories";
import { getCustomRepository } from "typeorm";

class ListAnswerService {
    async execute(answer_id: string) {
        const answersRepository = getCustomRepository(AnswersRepositories);

        const answers = await answersRepository.findOne(answer_id);

        return { answers };
    }
}

export { ListAnswerService };