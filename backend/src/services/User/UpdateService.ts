import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";


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
            return new Error("User not found!");
        };

        user.name = name ? name : user.name;
        user.email = email ? email : user.email;
        user.password = password ? await bcrypt.hash(password, 8) : user.password;
        user.cpf = cpf ? cpf : user.cpf;

        await repo.save(user);

        return user;
    }
}