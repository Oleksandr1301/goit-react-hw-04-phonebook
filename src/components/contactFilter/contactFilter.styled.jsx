import styled from 'styled-components';

export const FilterBox = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 30px auto;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #e9f3f5;
  padding: 18px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  text-align: center;
  font-size: 18px;
`;

export const FilterInput = styled.input`
  border-radius: 5px;
  border: 1px solid #000;
  padding: 5px;
`;
