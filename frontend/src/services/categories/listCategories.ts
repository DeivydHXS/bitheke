import axios from "axios";
import { CategoryInterface } from "../../interfaces";

export async function listCategories(): Promise<CategoryInterface[]> {
    const endpoint = 'http://localhost:3333/categories';

    const response = await axios.get<CategoryInterface[]>(endpoint);

    return response.data;
};