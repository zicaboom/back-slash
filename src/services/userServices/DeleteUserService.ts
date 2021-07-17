import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IDeleteUser {
    reqUser: string,
    delUser: string
}

class DeleteUserService {
    async execute({ reqUser, delUser }: IDeleteUser) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne(reqUser);
        const deleted = await userRepository.findOne(delUser);

        if (user != deleted && !user.admin) {
            throw new Error("Unauthorized");
        }

        await userRepository.delete(deleted.id);

        return { deleted };
    }
}

export { DeleteUserService };