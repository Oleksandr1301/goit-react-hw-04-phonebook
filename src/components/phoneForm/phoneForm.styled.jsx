import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 200px;
  padding: 18px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 50px auto;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #e9f3f5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;

  .lable {
    border-radius: 5px;
    border: 1px solid #000;
    padding: 5px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const ButtonSubmit = styled.button`
  width: 90px;
  margin-left: 40px;
  padding: 5px 0 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #b4f0bb;
  margin: 0 auto;
  &:hover {
    scale: 1.03;
    background-color: #34d947;
  }
`;
