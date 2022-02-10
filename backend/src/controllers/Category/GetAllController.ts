import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../services/Category/GetAllService";

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoriesService();

        const result = await service.execute();

        return response.json(result);
    }
}