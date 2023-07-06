import FormGroupComponent from '../../components/FormGroup'
import Input from '../../components/Input'
import { useState } from 'react'
import { Form } from './styled'
import PageHeader from '../../components/PageHeader'

export default function EditPetScreen () {
  const [name, setName] = useState<string>()
  const [age, setAge] = useState<string>()
  const [type, setType] = useState<string>()
  const [color, setColor] = useState<string>()
  return (
    <>
    <PageHeader
      title='Editar Pet'
    />
    <Form>
      <FormGroupComponent>
      <Input
        value={name}
        placeholder='Nome do Animalzinho'
      />
    </FormGroupComponent>
    </Form>
    </>

  )
}
