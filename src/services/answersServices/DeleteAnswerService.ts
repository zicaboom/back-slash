import { AnswersRepositories } from "repositories/AnswersRepositories";
import { UsersRepositories } from "repositories/UsersRepositories";
import { getCustomRepository, Index } from "typeorm";

class DeleteAnswerService {
    async execute({ answer_id, user_id }) {
        const answerRepository = getCustomRepository(AnswersRepositories);
        const userRepository = getCustomRepository(UsersRepositories);

        const answer = await answerRepository.findOne(answer_id, { relations: ["created_by", "question"] });
        const user = await userRepository.findOne(user_id, { relations: ["questions"] });

        // find é o método de procurar objetos em arrays com form suas características
        const questionPertencesUser = user.questions.find(question => question.id === answer.question.id);

        console.log(questionPertencesUser);

        // comparo somente o id porque neste caso trouxe as relações de questão do usuário
        if (answer.created_by.id != user.id && !questionPertencesUser) {
            throw new Error("Unauthorized");
        }

        await answerRepository.delete(answer.id);

        return;
    }
}

export { DeleteAnswerService };