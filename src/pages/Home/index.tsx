import { Container, WelcomeContainer, Header, ListContainer, PetCards } from './styled'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import select from '../../assets/images/select.png'

interface PetProps {
  age: string
  category_id: string
  category_name: string
  color: string
  id: string
  name: string
  type: string

}

export default function HomeScreen () {
  const [pets, setPets] = useState<PetProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3002/pets')
      .then(async (response) => {
        const json = await response.json()
        setPets(json)
      })
      .catch((error) => {
        console.log('erro', error)
      })
  }, [])

  console.log(pets)

  return (
    <Container>
      <WelcomeContainer>
        <h1>Bem - vindo ao MyPet!</h1>
        <input type="search" placeholder="Pesquisar Pet" />
      </WelcomeContainer>
      <Header>
        <strong>
          Pets: {pets.length}
          {pets.length === 1 ? ' pet' : ' pets'}

          </strong>
        <Link to='/register-pet'>Cadastrar Novo Pet</Link>
      </Header>
      <ListContainer>
        <header>
          <button type='button' className='sort-button'>
            <span>Nome</span>
          </button>
        </header>
        {pets.map((pet) => (
          <PetCards key={pet.id}>
          <div className='info'>
          <div className='pet-name'>
            <strong>Nome: {pet.name}</strong>
            <small>Tipo: {pet.type}</small>
          </div>
          <span>Cor: {pet.color}</span>
          <span>Idade: {pet.age} </span>
          </div>
          <div className='actions'>
            <Link to="/edit">
              <img src={select} alt='edit' />
            </Link>
          </div>
        </PetCards>
        ))}

      </ListContainer>
    </Container>
  )
}
