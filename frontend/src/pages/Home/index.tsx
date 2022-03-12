import React from 'react';
import { Container, Title } from './styles';

interface HomeProps {
    
}

export const Home: React.FC<HomeProps> = () => {
    return (
        <Container>
            <Title>
                BITHEKE
            </Title>
            <p>Welcome to Bitheke</p>
            <p>a library system to get your favorites books!</p>
        </Container>
    );
};
