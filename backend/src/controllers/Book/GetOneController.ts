import { Request, Response } from "express";
import { GetOneBookService } from "../../services/Book/GetOneService";

export class GetOneBookController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new GetOneBookService();

        const result = await service.execute(id);

        return response.json(result);
    }
}