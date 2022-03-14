import React, { useEffect, useState } from 'react';
import { CategoryInterface } from '../../../interfaces';
import { addBook } from '../../../services/books/addBook';
import { listCategories } from '../../../services/categories/listCategories';
import { Container, Title, Form } from './styles';

interface AddBookProps {
    
}

export const AddBook: React.FC<AddBookProps> = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [shelf, setShelf] = useState('');
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState<CategoryInterface[]>();

    useEffect(() => {
        listCategories().then((response) => {
            setCategories(response);
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook(title, description, category, shelf, price);
    };

    return (
        <Container>
            <Title>Add Book</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <p>Title: </p>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>

                <div>
                    <p>Description:</p> 
                    <textarea  
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                </div>

                <div>
                    <p>Category:</p> 
                    <select onChange={(e) => {setCategory(e.target.value)}}>
                        <option>Choose a category</option>
                        {categories?.map((c) => (
                            <option value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p>Price:</p>
                    <input 
                        type="number" 
                        name="price" 
                        onChange={(e) => {setPrice(parseInt(e.target.value))}}
                    />
                </div>

                <div>
                    <p>Shelf:</p> 
                    <input 
                        type="text" 
                        name="shelf" 
                        onChange={(e) => {setShelf(e.target.value)}}
                    />
                </div>

                <input type="submit" />
            </Form>
        </Container>
    );
};
