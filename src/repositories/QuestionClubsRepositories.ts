import { QuestionClub } from "../entities/QuestionClub";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(QuestionClub)
class QuestionClubsRepositories extends Repository<QuestionClub>{}

export { QuestionClubsRepositories }