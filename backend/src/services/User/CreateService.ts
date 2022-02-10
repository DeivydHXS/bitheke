import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";

type UserRequest = {
    name: string;
    email: string;
    password: string;
    cpf?: string;
}

export class CreateUserService {
    async execute({ name, email, password, cpf }: UserRequest): Promise<User | Error> {
        const repo = getRepository(User);

        if(await repo.findOne({email})) {
            return new Error("User already exists");
        };

        const passwordHash = await bcrypt.hash(password, 8);

        const user = repo.create({
            name,
            email,
            password: passwordHash,
            cpf
        });

        await repo.save(user);

        return user;
    }
}