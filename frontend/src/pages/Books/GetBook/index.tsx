import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookInterface } from '../../../interfaces';
import { getBook } from '../../../services/books/getBook';
import { Container, Title } from './styles';

interface GetBookProps {
}

export const GetBook: React.FC<GetBookProps> = () => {
    const { id } = useParams();
    const [book, setBook] = useState<BookInterface[]>([{
        id: "",
        title: "",
        description: "",
        price: 0,
        category_id: "",
        category: {
            id: "",
            name: "",
            description: "",
            created_at: new Date,
        },
        shelf: "",
        created_at: new Date,
    }]);
    
    useEffect(() => {
        getBook(id).then((response) => {
            setBook(response);
        });
    }, []);
    
    return (
        <Container>
            {book.map((item) => (
                <>
                    <Title>
                        {item.title}
                    </Title>
                    <p>
                        {item.description}
                    </p>
                </>    
            ))}
        </Container>
    );
};
