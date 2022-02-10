import { Request, Response } from "express";
import { LoginService } from "../../services/User/LoginService";

export class LoginController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const service = new LoginService();

        const result = await service.execute({ email, password });

        if(result instanceof Error) {
            return response.status(404).json(result.message);
        }

        return response.json(result);
    }
}