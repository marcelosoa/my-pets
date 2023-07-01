// Custom hook para tratar erros

import { useState } from 'react'

interface ErrorProps {
  field: string
  message: string
}

export default function useErrors () {
  const [errors, setErrors] = useState<ErrorProps[]>([])

  function setError ({ field, message }: ErrorProps) {
    const errorAlreadyExist = errors.find((error) => error.field === field)

    if (errorAlreadyExist != null) {
      return
    }
    setErrors((prevState) => [
      ...prevState,
      { field, message }
    ])
  }

  function removeError (fieldName: string) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName
    ))
  }

  function getErrorMessageByFieldName (fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return { setError, removeError, getErrorMessageByFieldName }
}
