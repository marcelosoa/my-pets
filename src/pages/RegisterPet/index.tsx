import React from 'react'
import PageHeader from '../../components/PageHeader'
import PetsService from '../../services/PetsService'
import PetForm from '../PetForm'
import { useHistory } from 'react-router-dom'

interface formDataProps {
  name: string
  age: string
  type: string
  color: string
}

export default function RegisterPetScreen () {
  const history = useHistory()
  async function handleSubmit (formData: formDataProps) {
    try {
      const pet = {
        name: formData.name,
        type: formData.type,
        color: formData.color,
        age: formData.age
      }
      await PetsService.createPet(pet)
      history.push('/')
    } catch (error) {
      throw new Error()
    }
  }

  return (
    <>
      <PageHeader title="Novo Animalzinho" />
      <PetForm
        buttonLabel="Cadastrar Novo Pet"
        onSubmit={handleSubmit}
      />
    </>
  )
}
