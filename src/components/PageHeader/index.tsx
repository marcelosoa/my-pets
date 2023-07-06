import { Link } from 'react-router-dom'
import { Container } from './styled'

interface PageProps {
  title: string | undefined
}

export default function PageHeader ({ title }: PageProps) {
  return (
    <Container>
      <Link to="/">
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}
