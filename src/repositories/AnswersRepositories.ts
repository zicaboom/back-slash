import { Answer } from "entities/Answer";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Answer)
class AnswersRepositories extends Repository<Answer>{ }

export { AnswersRepositories };