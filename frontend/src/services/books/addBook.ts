import axios from "axios";
import { BookInterface } from "../../interfaces";

export async function addBook(title: string, description: string, category: string, shelf: string): Promise<BookInterface> {
    const endpoint = `http://localhost:3333/books`;

    const response = await axios.post<BookInterface>(endpoint);

    return response.data;
};