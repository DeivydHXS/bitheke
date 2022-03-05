import React, { useEffect, useState } from 'react';
import { Container, Table, Option } from './styles';
import { listBooks } from '../../../../services/listBooks';
import { BookInterface } from '../../../../interfaces';

interface BookTableProps {

}

export const BookTable: React.FC<BookTableProps> = () => {
    const [books, setBooks] = useState<BookInterface[]>();

    useEffect(() => {
        listBooks().then((response) => {
            setBooks(response);
        });
    }, []);

    return (
        <Container>
            <Table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Options</th>
                </tr>
                {books?.map((book) => (
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.category.name}</td>
                        <td>
                            <Option>Show</Option>
                            <Option>Edit</Option>
                            <Option>Delete</Option>
                        </td>
                    </tr>
                ))}
            </Table>
        </Container>
    );
};

