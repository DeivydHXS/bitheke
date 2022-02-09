import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, cpf } = request.body;

        const service = new CreateUserService();

        const result = await service.execute({name, email, password, cpf});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}