import { createContext, useContext } from "react";
import { UserInterface } from "../../interfaces";

type UserContextType = {
    user: UserInterface,
    setUser: (user: UserInterface) => void
}

export const UserContext = createContext<UserContextType>({
    user: {
        id: '',
        token: '',
        name: '',
        email: ''
    },
    setUser: () => {}
});
