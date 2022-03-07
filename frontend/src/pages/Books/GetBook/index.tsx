import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookInterface } from '../../../interfaces';
import { getBook } from '../../../services/getBook';
import { Container, Title } from './styles';

interface GetBookProps {
}

export const GetBook: React.FC<GetBookProps> = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookInterface>();
    
    useEffect(() => {
        getBook(id).then((response) => {
            setBook(response);
        });
    }, []);
    return (
        <Container>
            <Title>
                {book?.title}
            </Title>
            <p>
                {book?.description}
            </p>
        </Container>
    );
};
