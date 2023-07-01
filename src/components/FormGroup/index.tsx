import { Container } from './styled'

interface FormGroupProps {
  children: React.ReactNode
  error?: string | undefined
}

export default function FormGroupComponent ({ children, error }: FormGroupProps) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  )
}
