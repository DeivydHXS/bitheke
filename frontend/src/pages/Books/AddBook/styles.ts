import styled from 'styled-components';

export const Container = styled.div`
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    
`;

export const Form = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;

    & > div {
        margin: 20px;
        
    }
`;