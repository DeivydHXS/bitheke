import axios from "axios";
import { BookInterface } from "../../interfaces";

export async function addBook(title: string, description: string, category: string, shelf: string, price: number): Promise<BookInterface> {
    const endpoint = `http://localhost:3333/books`;

    const response = await axios.post<BookInterface>(endpoint,
        {title, description, category_id: category, shelf, price},
        {headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer token"
        }}
    );


    return response.data;
};
