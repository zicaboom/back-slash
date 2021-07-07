import { classToClass } from "class-transformer";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs"

interface ICreateUser{
    name: string,
    email: string,
    password: string,
    admin?: boolean
}

class CreateUserService{
    async execute({name, email, password, admin=false}: ICreateUser){
        const usersRepository = getCustomRepository(UsersRepositories)

        if(!email || !password){
            throw new Error("Incorrect information")
        }

        const userAlreadyExists = await usersRepository.findOne({email})

        if(userAlreadyExists){
            throw new Error("User Already Exists")
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email, 
            password: passwordHash,
            admin
        })

        await usersRepository.save(user)

        return classToClass(user)
    }
}
export { CreateUserService }