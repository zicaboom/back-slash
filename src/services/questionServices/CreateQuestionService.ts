import { QuestionRepositories } from "../../repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IQuestionCreate {
    user_id: string
    content: string
}

class CreateQuestionService {
    async execute({ user_id, content }: IQuestionCreate) {
        const userRepository = getCustomRepository(UsersRepositories);

        const questionRepository = getCustomRepository(QuestionRepositories);

        const user = await userRepository.findOne(user_id);

        if (!content) {
            throw new Error("Content Incorrect");
        }

        const questionAlreadyExists = await questionRepository.findOne({ content });

        if (questionAlreadyExists) {
            throw new Error("Question already exists");
        }

        const question = questionRepository.create({
            content,
            created_by: user
        });

        await questionRepository.save(question);

        return { question };
    }
}
export { CreateQuestionService };