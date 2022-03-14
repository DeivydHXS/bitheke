import { Request, Response } from "express";
import { CreateBookService } from "../../services/Book/CreateService";

export class CreateBookController {
    async handle(request: Request, response: Response) {
        try {
            const { title, description, price, category_id, shelf } = request.body;

            const service = new CreateBookService();

            const result = await service.execute({ title, description, price, category_id, shelf });

            if(result instanceof Error) {
                return response.status(400).json(result.message);
            }

            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500);
        }
    }
}