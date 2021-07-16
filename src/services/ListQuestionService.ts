import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

class ListQuestionService {
    async execute(user_id: string) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne(user_id, {relations: ["questions"]});

        const questions = user.questions;

        return { questions };
    }
}

export { ListQuestionService };