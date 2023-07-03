import styled from 'styled-components'

interface InputProps {
  error?: string
  hasIconLeft?: boolean
}

export default styled.input<InputProps>`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 65px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  & + & {
    margin-top: 16px;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.primary_button};
  }

  ${({ error }) =>
    error &&
    `
    border-color: red;
  `}
`
