import React, { useEffect, useState } from 'react';
import { CategoryInterface } from '../../../interfaces';
import { addBook } from '../../../services/books/addBook';
import { listCategories } from '../../../services/categories/listCategories';
import { Container, Title } from './styles';

interface AddBookProps {
    
}

export const AddBook: React.FC<AddBookProps> = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [shelf, setShelf] = useState('');
    const [categories, setCategories] = useState<CategoryInterface[]>();

    useEffect(() => {
        listCategories().then((response) => {
            setCategories(response);
        });
    }, []);

    const handleSubmit = () => {
        useEffect(() => {
            addBook(title, description, category, shelf);
        }, []);
    }

    return (
        <Container>
            <Title>Add Book</Title>
            <form action="/books" method="get" onSubmit={handleSubmit}>
                <label>Title
                    <input 
                        type="text" 
                        name="title" 
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </label>

                <label>Description
                    <textarea  
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                </label>

                <select value="Choose" onChange={(e) => {setCategory(e.target.value); console.log(category)}}>
                    {categories?.map((c) => (
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>

                <label>Shelf
                    <input 
                        type="text" 
                        name="shelf" 
                        onChange={(e) => {setShelf(e.target.value)}}
                    />
                </label>



                <input type="submit" />
            </form>
        </Container>
    );
};
