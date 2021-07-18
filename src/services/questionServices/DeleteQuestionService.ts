import { QuestionRepositories } from "repositories/QuestionRepositories";
import { UsersRepositories } from "repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IDeleteQuestion {
    user_id: string,
    question_id: string
}

class DeleteQuestionService {
    async execute({ user_id, question_id }: IDeleteQuestion) {
        const usersRepository = getCustomRepository(UsersRepositories);
        const questionsRepository = getCustomRepository(QuestionRepositories);

        const user = await usersRepository.findOne(user_id);
        const question = await questionsRepository.findOne(question_id, { relations: ["created_by"] });

        if (question.created_by != user && !user.admin) {
            throw new Error("Unauthorized");
        }

        questionsRepository.delete(question.id);

        return;
    }
}

export { DeleteQuestionService };