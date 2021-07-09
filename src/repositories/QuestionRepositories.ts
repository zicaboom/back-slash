import { Question } from "../entities/Question";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Question)
class QuestionRepositories extends Repository<Question>{}

export {QuestionRepositories}