import styles from './styles.css';
import React from 'react';
import { Container, Title } from './styles';

interface indexProps {
    
}

export const ListBooks: React.FC<indexProps> = () => {
    return (
        <Container>
            <Title>
                List Book
            </Title>
        </Container>
    );
};
