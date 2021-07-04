import { Club } from "@entities/Club";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Club)
class ClubsRepositories extends Repository<Club>{}

export { ClubsRepositories }