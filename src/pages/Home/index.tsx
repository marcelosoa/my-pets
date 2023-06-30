import { Container, WelcomeContainer, Header, ListContainer, PetCards } from './styled'
import { Link } from 'react-router-dom'
import select from '../../assets/images/select.png'

export default function HomeScreen () {
  return (
    <Container>
      <WelcomeContainer>
        <h1>Bem - vindo ao MyPet!</h1>
        <input type="search" placeholder="Pesquisar Pet" />
      </WelcomeContainer>
      <Header>
        <strong>Pets Cadastrados: #3</strong>
        <Link to='/register-pet'>Cadastrar Novo Pet</Link>
      </Header>
      <ListContainer>
        <header>
          <button type='button' className='sort-button'>
            <span>Nome</span>
          </button>
        </header>
        <PetCards>
          <div className='info'>
          <div className='pet-name'>
            <strong>Nome: Matilda</strong>
            <small>Felino</small>
          </div>
          <span>Cor: Branco</span>
          <span>Idade: 2 </span>
          </div>
          <div className='actions'>
            <Link to="/edit">
              <img src={select} alt='edit' />
            </Link>
          </div>
        </PetCards>
      </ListContainer>
    </Container>
  )
}
