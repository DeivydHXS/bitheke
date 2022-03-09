import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookInterface } from '../../../interfaces';
import { getBook } from '../../../services/getBook';
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
            {book.map((bk) => (
                <>
                    <Title>
                        {bk.title}
                    </Title>
                    <p>
                        Description: {bk.description}
                    </p>
                </>    
            ))}
        </Container>
    );
};
