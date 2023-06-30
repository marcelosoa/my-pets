import styled, { css } from 'styled-components';

export default styled.button`
  margin-top: 15px;
  color: #fff;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.primary_button};
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
  height: 52px;
  border-radius: 6px;
  outline: none;
  transition: background 0.2s ease-in;

`