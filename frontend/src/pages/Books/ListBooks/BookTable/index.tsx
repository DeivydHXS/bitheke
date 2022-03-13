import React, { useEffect, useState } from 'react';
import { Container, Table, Option, AddBookButton, OptionList } from './styles';
import { listBooks } from '../../../../services/books/listBooks';
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
                <a href='/books/add_book'><BsPlusLg />Add a new book</a>
            </AddBookButton>
            <Table>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Options</th>
                </tr>
                {books?.map((book) => (
                    <tr>
                        <td>{book.title}</td>
                        <td>{book.category.name}</td>
                        <OptionList>
                            <Option><a href={`/books/${book.id}`}><BsFillEyeFill /></a></Option>
                            <Option><a href={`/books/${book.id}`}><BsFillPencilFill /></a></Option>
                            <Option><a href={`/books/${book.id}`}><BsTrashFill /></a></Option>
                        </OptionList>
                    </tr>
                ))}
            </Table>
        </Container>
    );
};

