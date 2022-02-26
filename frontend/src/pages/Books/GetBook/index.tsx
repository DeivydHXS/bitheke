import styles from './styles.css';
import React from 'react';
import { Container, Title } from './styles';

interface indexProps {
    
}

export const GetBook: React.FC<indexProps> = () => {
    return (
        <Container>
            <Title>
                Get Book
            </Title>
        </Container>
    );
};
