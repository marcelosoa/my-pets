import styled from 'styled-components'

export const Container = styled.header`
margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      color: ${({ theme }) => theme.colors.primary.text};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.primary_button};
  }
`

export const NewContactInput = styled.label``
