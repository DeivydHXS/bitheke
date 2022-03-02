import axios from "axios";
import { BookInterface } from "../interfaces";

export async function listBooks(): Promise<BookInterface[]> {
    const endpoint = 'http://localhost:3333/books';

    const response = await axios.get<BookInterface[]>(endpoint);

    return response.data;
};