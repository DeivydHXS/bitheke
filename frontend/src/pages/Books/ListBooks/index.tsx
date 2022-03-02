import React from 'react';
import { Container, Title } from './styles';
import { BooksTable } from './BooksTable';

interface ListBooksProps {
    
}

export const ListBooks: React.FC<ListBooksProps> = () => {
    return (
        <Container>
            <Title>
                List Book
            </Title>

            <BooksTable />
        </Container>
    );
};
