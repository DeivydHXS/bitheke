import { Request, Response } from "express";
import { GetAllBooksService } from "../../services/Book/GetAllService";

export class GetAllBooksController {
    async handle(request: Request, response: Response) {
        const service = new GetAllBooksService();

        const result = await service.execute();

        return response.json(result);
    }
}