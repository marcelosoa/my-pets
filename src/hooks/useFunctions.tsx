import { useState } from 'react'
import useErrors from './useErrors'

export default function useFunctions() {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>()
  const [type, setType] = useState<string>()
  const [color, setColor] = useState<string>()

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setName(value)

    if (!value) {
      getErrorMessageByFieldName('name')
      setError({ field: 'name', message: 'nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    setType(value)

    if (!value) {
      setError({ field: 'type', message: 'Tipo é Obrigatório' })
    } else {
      removeError('type')
    }
  }

  function handleChangeColor(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setColor(value)

    if (!value) {
      setError({ field: 'color', message: 'Cor é obrigatória' })
    } else {
      removeError('color')
    }
  }

  function handleChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setAge(value)

    if (!value) {
      setError({ field: 'age', message: 'Idade é obrigatória' })
    } else {
      removeError('age')
    }
  }

  return { handleNameChange, handleTypeChange, handleChangeColor, handleChangeAge }
}
