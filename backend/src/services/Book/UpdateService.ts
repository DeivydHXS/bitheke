import { getRepository } from "typeorm";
import { Book } from "../../entities/Book";
import { Category } from "../../entities/Category";

type BookUpdateRequest = {
    id: string;
    title: string;
    description: string;
    price: number;
    category_id: Category;
    shelf: string;
}

export class UpdateBookService {
    async execute({ id, title, description, price, category_id, shelf }: BookUpdateRequest) {
        const repo = getRepository(Book);

        const book = await repo.findOne(id);

        if(!book) {
            return new Error("Book does not exists!");
        };

        const repoCategory = getRepository(Category);

        if (!(await repoCategory.findOne(category_id))) {
            return new Error("Category does not exists");
        };

        book.title = title ? title : book.title;
        book.description = description ? description : book.description;
        book.price = price ? price : book.price;
        book.category_id = category_id ? category_id : book.category_id;
        book.shelf = shelf ? shelf : book.shelf;

        await repo.save(book);

        return book;
    }
}