import {
  Container,
  WelcomeContainer,
  Header,
  ListHeader,
  PetCards
} from './styled'
import { Link } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import select from '../../assets/images/select.png'
import arrowup from '../../assets/images/arrowup.png'
import LoaderComponent from '../../components/Loader'
import PetsService from '../../services/PetsService'

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
  const [search, setSearch] = useState<string>('')
  const [orderBy, setOrderBy] = useState<string>('desc')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPets () {
      try {
        setIsLoading(true)

        const petList = await PetsService.listPets(orderBy)
        setPets(petList)
      } catch (error) {
        return error
      } finally {
        setIsLoading(false)
      }
    }
    loadPets()
  }, [orderBy])

  const filteredPets = useMemo(
    () =>
      pets.filter((pet) =>
        pet.name.toLowerCase().includes(search.toLowerCase())
      ),
    [pets, search]
  )

  function handleChangeSearchPet (event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function handleToggleOrderBy (event: React.MouseEvent<HTMLButtonElement>) {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <Container>
      <LoaderComponent isLoading={isLoading} />
      <WelcomeContainer>
        <h1>Bem - vindo ao MyPet!</h1>
        <input
          type="search"
          placeholder="Pesquisar Pet"
          value={search}
          onChange={handleChangeSearchPet}
        />
      </WelcomeContainer>
      <Header>
        <strong>
          Pets: {filteredPets.length}
          {filteredPets.length === 1 ? ' pet' : ' pets'}
        </strong>
        <Link to="/register-pet">Cadastrar Novo Pet</Link>
      </Header>
      <ListHeader orderBy={orderBy}>
        <button
          type="button"
          className="sort-button"
          onClick={handleToggleOrderBy}
        >
          <span>Nome</span>
          <img src={arrowup} alt="arrow" />
        </button>
      </ListHeader>
      {filteredPets.map((pet) => (
        <PetCards key={pet.id}>
          <div className="info">
            <div className="pet-name">
              <strong>Nome: {pet.name}</strong>
              <small>Tipo: {pet.type}</small>
            </div>
            <span>Cor: {pet.color}</span>
            <span>Idade: {pet.age} </span>
          </div>
          <div className="actions">
            <Link to='/edit'>
              <img src={select} alt="edit" />
            </Link>
          </div>
        </PetCards>
      ))}
    </Container>
  )
}
