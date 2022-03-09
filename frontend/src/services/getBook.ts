import axios from "axios";
import { BookInterface } from "../interfaces";

export async function getBook(id: string | undefined): Promise<BookInterface[]> {
    const endpoint = `http://localhost:3333/books/${id}`;

    const response = await axios.get<BookInterface[]>(endpoint);

    return response.data;
};