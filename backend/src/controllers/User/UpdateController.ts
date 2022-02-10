import { Request, Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateService";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, password, cpf } = request.body;

        const service = new UpdateUserService();

        const result = await service.execute({ id, name, email, password, cpf });

        if(result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.json(result);
    }
}