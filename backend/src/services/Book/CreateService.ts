import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";
import { Category } from "../../entities/Category";

type BookRequest = {
    title: string;
    description: string;
    price: number;
    category_id: Category;
    shelf: string;
}

export class CreateBookService {
    async execute({ title, description, price, category_id, shelf }: BookRequest): Promise<Book | Error> {
        const repo = getRepository(Book);
        const repoCategory = getRepository(Category);

        if (!(await repoCategory.findOne(category_id))) {
            return new Error("Category does not exists");
        };

        const book = repo.create({ title, description, price, category_id, shelf });

        await repo.save(book);

        return book;
    }
}