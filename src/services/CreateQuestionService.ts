import { QuestionRepositories } from "../repositories/QuestionRepositories";
import { getCustomRepository } from "typeorm";

interface IQuestionCreate{
    user: string
    content: string
}

class CreateQuestionService {
    async execute({user, content} : IQuestionCreate){
        const questionRepository = getCustomRepository(QuestionRepositories)

        if(!content){
            throw new Error("Content Incorrect")
        }

        const questionAlreadyExists = await questionRepository.findOne({content})

        if(questionAlreadyExists){
            throw new Error("Question already exists")
        }

        const question = questionRepository.create({
            content,
            created_by: user
        })

        await questionRepository.save(question)

        return  {question}
    }
}
export{CreateQuestionService}