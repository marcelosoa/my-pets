import styled from 'styled-components'

interface FormDataProps {
  name: string
  age: string
  type: string
  color: string
}

interface FormProps {
  onSubmit: (event: React.FormEvent, formData: FormDataProps) => void
}

export const Form = styled.form<FormProps>`

`

export const ButtonContainer = styled.div`
  button {
    width: 100%;
    text-align: center;
  }
`
