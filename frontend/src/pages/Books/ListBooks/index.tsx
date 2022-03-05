import React from 'react';
import { Container, Title } from './styles';
import { BookTable } from './BookTable';

interface ListBooksProps {
    
}

export const ListBooks: React.FC<ListBooksProps> = () => {
    return (
        <Container>
            <Title>
                Book List
            </Title>

            <BookTable />
        </Container>
    );
};
