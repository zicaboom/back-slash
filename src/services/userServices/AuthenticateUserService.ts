import { compare } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { key } from "../../config/configAuth";

interface IAuthenticateUser {
    email: string
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUser) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({ email });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, key, {
            subject: user.id,
            expiresIn: "1d"
        });

        return { token };
    }
}

export { AuthenticateUserService };