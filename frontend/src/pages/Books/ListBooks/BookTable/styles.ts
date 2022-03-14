import styled from 'styled-components';

export const Container = styled.div`
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Option = styled.button`
  border-radius: 16px;
  border-style: solid;

  & > a {
    color: black;
  }
`;

export const AddBookButton = styled.div`
  margin: 16px;

  & > a {
    background-color: #009769;
    border-radius: 16px;
    padding: 16px;

    text-decoration: none;
    color: white;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  text-align: center;

  th {
    background-color: #009769;
    color: white;
    padding: 10px 15px;
    font-weight: bold;
  }

  td {
    background-color: #f2f2f2;
    padding: 10px;
  }

`;

export const OptionList = styled.td`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;