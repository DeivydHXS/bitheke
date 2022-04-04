import React, { useContext, useState } from 'react';
import { UserContext } from '../../hooks/UserContext';
import { login } from '../../services/users/Login';

interface LoginProps {
    
}

export const Login: React.FC<LoginProps> = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { user, setUser } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const user = await login(email, password);
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Email: {email}</h2>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />

            <h2>Password: {password}</h2>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};