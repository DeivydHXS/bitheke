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
import { DeleteUserController } from "./controllers/User/DeleteController";
import { GetAllUsersController } from "./controllers/User/GetAllController";
import { LoginController } from "./controllers/User/LoginController";
import { UpdateUserController } from "./controllers/User/UpdateController";
import { auth } from "./middlewares/auth";

const routes = Router();

routes.post('/categories', auth, new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', auth, new DeleteCategoryController().handle);
routes.put('/categories/:id', auth, new UpdateCategoryController().handle);

routes.post('/books', auth, new CreateBookController().handle);
routes.get('/books', new GetAllBooksController().handle);
routes.get('/books/:id', new GetAllBooksController().handle);
routes.delete('/books/:id', auth, new DeleteBookController().handle);
routes.put('/books/:id', auth, new UpdateBookController().handle);

routes.post('/users', new CreateUserController().handle);
routes.get('/users', auth, new GetAllUsersController().handle);
routes.delete('/users/:id', auth, new DeleteUserController().handle);
routes.put('/users/:id', auth, new UpdateUserController().handle);
routes.post('/session', new LoginController().handle);


export { routes };