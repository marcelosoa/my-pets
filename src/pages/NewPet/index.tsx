import FormGroupComponent from '../../components/FormGroup'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import { Form, ButtonContainer } from './styled'
import useErrors from '../../hooks/useErrors'
import useFunctions from '../../hooks/useFunctions'

import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'

export default function RegisterPetScreen () {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>()
  const [type, setType] = useState<string>()
  const [color, setColor] = useState()

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()
  // const { handleNameChange, handleTypeChange } = useFunctions()

  function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setName(value)

    if (!value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleTypeChange (event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    setType(value)

    if (!value) {
      setError({ field: 'type', message: 'Tipo é Obrigatório' })
    } else {
      removeError('type')
    }
  }

  return (
    <>
      <PageHeader title="Novo Animalzinho" />
      <Form>
        <FormGroupComponent error={getErrorMessageByFieldName('name')}>
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder="Nome do animalzinho"
            error={getErrorMessageByFieldName('name')}
          />
        </FormGroupComponent>
        <FormGroupComponent error={getErrorMessageByFieldName('type')}>
          <Select
          value={type}
          onChange={handleTypeChange}
            placeholder="Tipo"
            error={getErrorMessageByFieldName('type')}
          >
            <option value="1">Felino</option>
            <option value="2">Cão</option>
            <option value="3">Ave</option>
            <option value="4">Roedor</option>
          </Select>
        </FormGroupComponent>
        <FormGroupComponent error=''>
          <Input
          value={color}
          placeholder="Cor do animalzinho"
          />
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
