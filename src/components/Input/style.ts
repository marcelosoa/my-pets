import styled from "styled-components";

interface InputFormProps {
  isFocused: boolean;
  isSelected: boolean;
}

export const Container = styled.div`
  background-color: #6527be;
`;
export const InputForm = styled.input<InputFormProps>`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  & + & {
    margin-top: 16px;
  }
`;
