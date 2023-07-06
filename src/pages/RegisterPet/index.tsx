import React from 'react'
import PageHeader from '../../components/PageHeader'
import PetsService from '../../services/PetsService'
import PetForm from '../PetForm'

interface formDataProps {
  name: string
  age: string
  type: string
  color: string
}

export default function RegisterPetScreen () {
  async function handleSubmit (formData: formDataProps) {
    const pet = {
      name: formData.name,
      type: formData.type,
      color: formData.color,
      age: formData.age
    }
    const response = await PetsService.createPet(pet)
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
