import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";

export class GetOneBookService {
    async execute(id: string) {
        const repo = getRepository(Book);

        const book = await repo.find({
            where: {
                id: id
            },
            relations: ['category']
        });

        return book;
    }
}