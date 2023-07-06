import React from 'react'
import PageHeader from '../../components/PageHeader'
import PetsService from '../../services/PetsService'
import RegisterPetScreen from '../NewPet'

interface formDataProps {
  name: string
  age: string
  type: string
  color: string
}

export default function NewPetForm () {
  async function handleSubmit (formData: formDataProps) {
    const pet = {
      name: formData.name,
      type: formData.type,
      color: formData.color,
      age: formData.age
    }
    const response = await PetsService.createPet(pet)
    console.log(response)
  }

  return (
    <>
      <PageHeader title="Novo Animalzinho" />
      <RegisterPetScreen
        buttonLabel="Cadastrar Novo Pet"
        onSubmit={handleSubmit}
      />
    </>
  )
}
