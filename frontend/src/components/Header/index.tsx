import React from 'react';
import { Container, Item, Link, List, Title } from './styles';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <Container>
            <Title>BITHEKE</Title>
            <List>
                <Item><Link href="/">Home</Link></Item>
                <Item><Link href="/books">Books</Link></Item>
            </List>
        </Container>
    );
};

export default Header;