import { useState } from 'react'
import useErrors from './useErrors'

export default function useFunctions () {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>()
  const [type, setType] = useState<string>()
  const [color, setColor] = useState()

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setName(value)

    if (!value) {
      setError({ field: 'name', message: 'nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleTypeChange (event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setType(value)

    if (!value) {
      setError({ field: 'type', message: 'Tipo é Obrigatório' })
    } else {
      removeError('type')
    }
  }

  return { handleNameChange, handleTypeChange }
}
