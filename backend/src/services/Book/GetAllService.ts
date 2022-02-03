import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";

export class GetAllBooksService {
    async execute() {
        const repo = getRepository(Book);

        const books = await repo.find();

        return books;
    }
}