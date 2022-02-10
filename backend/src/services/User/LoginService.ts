import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type LoginRequest = {
    email: string;
    password: string;
}

export class LoginService {
    async execute({ email, password }: LoginRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne({
            where: {
                email
            }
        });

        if(!user) {
            return new Error("User does not exists!");
        };

        if(!(await bcrypt.compare(password, user.password))) {
            return new Error("User not found!");
        };

        const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
            expiresIn: '1d'
        });

        const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            token
        }

        return data;
    }
}