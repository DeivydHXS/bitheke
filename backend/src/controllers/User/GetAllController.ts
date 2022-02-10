import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/User/GetAllService";

export class GetAllUsersController {
    async handle(request: Request, response: Response) {
        const service = new GetAllUsersService();

        const result = await service.execute();

        return response.json(result);
    }
}