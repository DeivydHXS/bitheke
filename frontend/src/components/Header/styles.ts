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
    color: white;
`;

export const List = styled.ul`
    list-style-type: none;
    overflow: hidden;
    padding: 0px;
    margin: 0px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Item = styled.li`
    margin: 16px 0px;
    float: left;
`;

export const Link = styled.a`
    color: white;
    text-align: center;
    padding: 16px;
    font-weight: bold;

    text-decoration: none;
    &:hover {
        background-color: white;
        color: black;
    }
`;