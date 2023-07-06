import PageHeader from '../../components/PageHeader'
import PetsService from '../../services/PetsService'
import PetForm from '../PetForm'
import { useParams } from 'react-router-dom'

interface formDataProps {
  name: string
  age: string
  type: string
  color: string
}

interface Params {
  id: string
}

// interface EditPetScreenProps {
//   location: Location
//   match: MatchProps
// }

// interface Location {
//   state: StateProps[]
// }

// interface StateProps {
//   name: string
//   type: string
//   color: string
//   age: string
//   category_id?: string | null
//   category_name?: string | null
// }

// interface MatchProps {
//   params: Params
// }

// interface Params {
//   id: string
// }

export default function EditPetScreen () {
  const { id } = useParams<Params>()
  console.log(id)
  async function handleEditPet (formData: formDataProps) {
    try {
      const updatedPet = {
        name: formData.name,
        type: formData.type,
        color: formData.color,
        age: formData.age
      }
      await PetsService.updatePets(id, updatedPet)
    } catch (error) {
      console.log('Erro do put', error)
    }
  }

  return (
    <>
      <PageHeader
        title='Editar Pet'
      />
      <PetForm
      buttonLabel='Editar Animalzinho'
      onSubmit={handleEditPet}
      />
    </>

  )
}
