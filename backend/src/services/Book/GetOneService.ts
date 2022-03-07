import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";

export class GetOneBookService {
    async execute(id: string) {
        const repo = getRepository(Book);

        const book = await repo.findOne(id, {
            relations: ['category']
        });

        return book;
    }
}