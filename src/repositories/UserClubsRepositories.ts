import { UserClub } from "../entities/UserClub";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(UserClub)
class UserClubsRepositories extends Repository<UserClub>{}

export { UserClubsRepositories }