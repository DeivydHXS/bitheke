import styles from './styles.css';
import React from 'react';
import { Container, Title } from './styles';

interface indexProps {
    
}

export const Home: React.FC<indexProps> = () => {
    return (
        <Container>
            <Title>
                BITHEKE
            </Title>
        </Container>
    );
};
