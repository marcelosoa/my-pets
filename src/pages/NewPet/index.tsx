import FormGroupComponent from '../../components/FormGroup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Form, ButtonContainer } from './styled'

import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'

export default function RegisterPetScreen () {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [type, setType] = useState()
  const [color, setColor] = useState()
  const [errors, setErrors] = useState([])

  // function getErrorMessageByFieldName(fieldName: any) {
  //   return errors.find((error) => error.field === fieldName)?.message;
  // }

  return (
    <>
      <PageHeader title="Novo Animalzinho" />
      <Form>
        <FormGroupComponent error=''>
          <Input value={name} placeholder="Nome do animalzinho" />
        </FormGroupComponent>
        <FormGroupComponent error=''>
          <Input value={type} placeholder="Tipo" />
        </FormGroupComponent>
        <FormGroupComponent error=''>
          <Input value={color} placeholder="Cor do animalzinho" />
        </FormGroupComponent>
        <FormGroupComponent error=''>
          <Input value={age} placeholder="Idade do animalzinho" />
        </FormGroupComponent>
        <ButtonContainer>
          <Button type="submit">Cadastrar Novo Pet</Button>
        </ButtonContainer>
      </Form>
    </>
  )
}
