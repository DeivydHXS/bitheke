import axios from "axios";
import { BookInterface } from "../../interfaces";

export async function addBook(title: string, description: string, category: string, shelf: string, price: number): Promise<BookInterface> {
    const endpoint = `http://localhost:3333/books`;

    const response = await axios.post<BookInterface>(endpoint,
        {title, description, category_id: category, shelf, price},
        {headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ZDMxMWM0LWE0OTQtNDk4Mi1iN2NjLTcwMTJiMWE0ZDFjZSIsImlhdCI6MTY0NzIyMDI3MiwiZXhwIjoxNjQ3MzA2NjcyfQ.jMPnjdhhmsDXtE-5YOD6Q8ilb6n6kHp1Q08hn6KS4ws"
        }}
    );


    return response.data;
};