import React, { useEffect, useState } from 'react';
import { Container, Table, Option, AddBookButton } from './styles';
import { listBooks } from '../../../../services/listBooks';
import { BookInterface } from '../../../../interfaces';
import { BsPlusLg, BsFillEyeFill, BsFillPencilFill, BsTrashFill } from "react-icons/bs";

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
            <AddBookButton>
                <BsPlusLg />
                <p>Add a new </p>
            </AddBookButton>
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
                            <Option><a href={`/books/${book.id}`}><BsFillEyeFill /></a></Option>
                            <Option><a href={`/books/${book.id}`}><BsFillPencilFill /></a></Option>
                            <Option><a href={`/books/${book.id}`}><BsTrashFill /></a></Option>
                        </td>
                    </tr>
                ))}
            </Table>
        </Container>
    );
};

