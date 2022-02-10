import { getRepository } from "typeorm";
import { User } from "../../entities/User";

type UserUpdateRequest = {
    id: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
}

export class UpdateUserService {
    async execute({ id, name, email, password, cpf }: UserUpdateRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if(!user) {
            return new Error("User does not exists!");
        };

        user.name = name ? name : user.name;
        user.email = email ? email : user.email;
        user.password = password ? password : user.password;
        user.cpf = cpf ? cpf : user.cpf;

        await repo.save(user);

        return user;
    }
}