import axios from "axios";
import { UserInterface } from "../../interfaces";

export async function login(email: string, password: string): Promise<UserInterface> {
    const endpoint = `http://localhost:3333/session`;

    try {
        const response = await axios.post<UserInterface>(endpoint, {email, password});
        return response.data;    
    } catch (error) {
        console.log(error);
        return {
            id: '',
            name: '',
            email: '',
            token: ''
        };
    }
};