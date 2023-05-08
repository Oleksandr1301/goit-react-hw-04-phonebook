import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  font-size: 16px;
`;

export const DelButton = styled.button`
  width: 70px;
  padding: 3px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #f0b8b4;

  &:hover {
    background-color: #f51105;
    scale: 1.05;
  }
`;
