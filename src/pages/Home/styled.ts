import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`

export const WelcomeContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.secondary_button};
    border: none;
    border-radius: 25px;
    height: 50px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.04));
    outline: 0;
    padding: 0 16px;

    & {
      margin-top: 25px;
    }

    &&::placeholder {
      color: ${({ theme }) => theme.colors.primary.text};
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
    color: #222;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.text};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.accent};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.primary_button};
      color: #fff;
    }
  }
`

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    .sort-button {
      background-color: transparent;
      margin-bottom: 8px;
      border: none;
      display: flex;
      align-items: center;
    }

    span {
      margin-right: 12px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.text};
    }
  }
`

export const PetCards = styled.div`
  background: ${({ theme }) => theme.colors.primary.secondary_button};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .pet-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.secondary_button};
        color: ${({ theme }) => theme.colors.primary.text};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }

      span {
        display: block;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.primary.text};
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    button: {
      color: aqua;
      background: transparent;
      border: none;
      margin-left: 10px;
    }
  }
`
