import React, { useEffect, useState } from 'react';
import { Container, Table, Title } from './styles';
import { listBooks } from '../../../../services/listBooks';
import { BookInterface } from '../../../../interfaces';

interface BooksTableProps {

}

export const BooksTable: React.FC<BooksTableProps> = () => {
    const [books, setBooks] = useState<BookInterface[]>();

    useEffect(() => {
        listBooks().then((response) => {
            setBooks(response);
        });
    }, []);

    return (
        <Container>
            <Title>Books Table</Title>
            <Table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
                {books?.map((book) => (
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.category.name}</td>
                    </tr>
                ))}
            </Table>
        </Container>
    );
};

