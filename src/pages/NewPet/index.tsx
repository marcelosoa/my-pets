import FormGroupComponent from '../../components/FormGroup'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import { Form, ButtonContainer } from './styled'
import useErrors from '../../hooks/useErrors'
import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import useFunctions from '../../hooks/useFunctions'

export default function RegisterPetScreen () {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>()
  const [type, setType] = useState<string>()
  const [color, setColor] = useState<string>()
  const [search, setSearch] = useState<string>('')
  const { setError, removeError, getErrorMessageByFieldName } = useErrors()
  const { handleNameChange, handleTypeChange } = useFunctions()


  function handleChangeColor (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setColor(value)

    if (!value) {
      setError({ field: 'color', message: 'Cor é obrigatória' })
    } else {
      removeError('color')
    }
  }

  function handleChangeAge (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setAge(value)

    if (!value) {
      setError({ field: 'age', message: 'Idade é obrigatória' })
    } else {
      removeError('age')
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
        <FormGroupComponent error={getErrorMessageByFieldName('color')}>
          <Input
            value={color}
            onChange={handleChangeColor}
            placeholder="Cor do animalzinho"
            error={getErrorMessageByFieldName('error')}
          />
        </FormGroupComponent>
        <FormGroupComponent error={getErrorMessageByFieldName('age')}>
          <Input
          value={age}
          onChange={handleChangeAge}
          placeholder="Idade do animalzinho"
          error={getErrorMessageByFieldName('age')}
          />
        </FormGroupComponent>
        <ButtonContainer>
          <Button type="submit">Cadastrar Novo Pet</Button>
        </ButtonContainer>
      </Form>
    </>
  )
}
