import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #009769;
    margin: 0px;
    padding: 0px;
`;

export const Title = styled.p  `
    font-size: 16px;
    font-weight: bold;
`;

export const List = styled.ul`
    list-style-type: none;
    overflow: hidden;
    padding: 0px;
    margin: 0px;
`;

export const Item = styled.li`
    float: left;
    padding: 16px;
    &:hover {
        background-color: #fff;
    }
`;

export const Link = styled.a`
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    
`;