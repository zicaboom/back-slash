import { QuestionClub } from "@entities/QuestionClub";
import { EntityColumnNotFound, EntityRepository, getCustomRepository, Repository } from "typeorm";

@EntityRepository(QuestionClub)
class QuestionClubsRepositories extends Repository<QuestionClub>{}

export { QuestionClubsRepositories }