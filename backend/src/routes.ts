import { Router } from "express";
import { CreateBookController } from "./controllers/Book/CreateController";
import { DeleteBookController } from "./controllers/Book/DeleteController";
import { GetAllBooksController } from "./controllers/Book/GetAllController";
import { UpdateBookController } from "./controllers/Book/UpdateController";
import { CreateCategoryController } from "./controllers/Category/CreateController";
import { DeleteCategoryController } from "./controllers/Category/DeleteController";
import { GetAllCategoriesController } from "./controllers/Category/GetAllController";
import { UpdateCategoryController } from "./controllers/Category/UpdateController";
import { CreateUserController } from "./controllers/User/CreateController";

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);

routes.post('/books', new CreateBookController().handle);
routes.get('/books', new GetAllBooksController().handle);
routes.delete('/books/:id', new DeleteBookController().handle);
routes.put('/books/:id', new UpdateBookController().handle);

routes.post('/users', new CreateUserController().handle);


export { routes };