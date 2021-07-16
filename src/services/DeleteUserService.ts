import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IDeleteUser {
    reqUser: string,
    delUser: string
}

class DeleteUserService {
    async execute({ reqUser, delUser }: IDeleteUser) {
        const userRepository = getCustomRepository(UsersRepositories);

        const { admin } = await userRepository.findOne(reqUser);
        const deleted = await userRepository.findOne(delUser);

        if (!deleted) {
            throw new Error("This user don't exists");
        }

        if (!admin && reqUser != deleted.id) {
            throw new Error("Unauthorized");
        }

        await userRepository.delete(delUser);

        return {deleted};
    }
}

export { DeleteUserService };