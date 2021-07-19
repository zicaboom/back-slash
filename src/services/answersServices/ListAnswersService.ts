import { AnswersRepositories } from "repositories/AnswersRepositories";
import { getCustomRepository } from "typeorm";

class ListAnswersService {
    async execute() {
        const answersRepository = getCustomRepository(AnswersRepositories);

        const answers = await answersRepository.find({ relations: ["question"] });

        return { answers };
    }
}

export { ListAnswersService };