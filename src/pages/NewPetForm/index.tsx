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
  function handleSubmit (formData: formDataProps) {
    console.log('New Contact -> HandleSubmit', { formData })
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
