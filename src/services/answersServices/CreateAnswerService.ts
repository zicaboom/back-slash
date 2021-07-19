import { AnswersRepositories } from "repositories/AnswersRepositories";
import { QuestionRepositories } from "repositories/QuestionRepositories";
import { UsersRepositories } from "repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface ICreateAnswer{
    content: string,
    question_id: string,
    user_id: string
}

class CreateAnswerService {
    async execute({ content, question_id, user_id }: ICreateAnswer) {
        const answersRepository = getCustomRepository(AnswersRepositories);
        const questionsRepository = getCustomRepository(QuestionRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);

        const question = await questionsRepository.findOne(question_id);
        const user = await usersRepository.findOne(user_id);

        if (!question) {
            throw new Error("This question don't exists");
        }

        const answerAlreadyExists = await answersRepository.findOne({content});

        if (answerAlreadyExists) {
            throw new Error("Answer already exists");
        }

        const answer = answersRepository.create({
            content,
            question,
            created_by: user
        });

        await answersRepository.save(answer);

        return { answer };
    }
}

export { CreateAnswerService };