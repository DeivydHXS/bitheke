import { Request, Response } from "express";
import { UpdateBookService } from "../../services/Book/UpdateService";

export class UpdateBookController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { title, description, price, category_id, shelf } = request.body;

        const service = new UpdateBookService();

        const result = await service.execute({ id, title, description, price, category_id, shelf });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}