import FormGroupComponent from "../../components/FormGroup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form, ButtonContainer } from './styled';

import React, { useState } from 'react';

interface RegisterProps {
  age: number,
  name: string,
  type: {},
  color: string
}

export default function RegisterPetScreen() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [type, setType] = useState();
  const [color, setColor] = useState();
  const [errors, setErrors] = useState([]);

  // function getErrorMessageByFieldName(fieldName: any) {
  //   return errors.find((error) => error.field === fieldName)?.message;
  // }


  return (
    <Form>
      <FormGroupComponent error=''>
        <Input value={name} placeholder="nome do animalzinho" />
      </FormGroupComponent>
      <FormGroupComponent error=''>
        <Input value={type} placeholder="raça" />
      </FormGroupComponent>
      <FormGroupComponent error=''>
        <Input value={color} placeholder="cor do animalzinho" />
      </FormGroupComponent>
      <FormGroupComponent error=''>
        <Input value={age} placeholder="idade do animalzinho" />
      </FormGroupComponent>
      <ButtonContainer>
        <Button type="submit">Cadastrar Novo Pet</Button>
      </ButtonContainer>

    </Form>
  )
}