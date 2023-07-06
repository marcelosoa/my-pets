import FormGroupComponent from '../../components/FormGroup'
import Input from '../../components/Input'
import { useState } from 'react'
import { Form } from './styled'
import PageHeader from '../../components/PageHeader'
import Button from '../../components/Button'
import { ButtonContainer } from '../PetForm/styled'
import PetsService from '../../services/PetsService'
import Select from '../../components/Select'

interface formDataProps {
  name: string
  age: string
  type: string
  color: string
}

interface EditPetScreenProps {
  location: Location
}

interface Location {
  state: StateProps[]
}

interface StateProps {

  id: string
  name: string
  type: string
  color: string
  age: string
  category_id?: string | null
  category_name?: string | null

}

export default function EditPetScreen (props: EditPetScreenProps) {
  const [name, setName] = useState<string | undefined>()
  const [type, setType] = useState<string>()
  const [color, setColor] = useState<string>()
  const [age, setAge] = useState<string>()
  const [formData, setFormData] = useState<formDataProps>({
    name: '',
    age: '',
    type: '',
    color: ''
  })
  const params = props?.location.state[0].name || ''

  async function handleEditPet () {

  }

  return (
    <>
      <PageHeader
        title={params ? `Editar ${params}` : ''}
      />
      <Form>
        <FormGroupComponent>
          <Input
            value={name}
            placeholder='Nome do Animalzinho'
          />
        </FormGroupComponent>
        <FormGroupComponent>
        <Select
            value={type}
            placeholder="Tipo"
          >
            <option value="Felino">Felino</option>
            <option value="Cão">Cão</option>
            <option value="Ave">Ave</option>
            <option value="Roedor">Roedor</option>
          </Select>
        </FormGroupComponent>
        <FormGroupComponent>
          <Input
            value={type}
            placeholder='Cor do animalzinho'
          />
        </FormGroupComponent>
        <FormGroupComponent>
          <Input
            value={type}
            placeholder='Idade do animalzinho'
          />
        </FormGroupComponent>
        <ButtonContainer>
          <Button type="submit">Editar Animalzinho</Button>
        </ButtonContainer>
      </Form>
    </>

  )
}
