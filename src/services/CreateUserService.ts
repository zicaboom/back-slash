import { classToPlain } from "class-transformer";
import { UsersRepositories } from "src/repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

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

        const user = usersRepository.create({
            name,
            email, 
            password,
            admin
        })

        await usersRepository.save(user)

        return classToPlain(user)
    }
}
export { CreateUserService }