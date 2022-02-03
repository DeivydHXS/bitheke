import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";

export class DeleteBookService {
    async execute(id: string) {
        const repo = getRepository(Book);

        if (!(await repo.findOne(id))) {
            return new Error("Book does not exists!");
        }

        await repo.delete(id);
    }
}