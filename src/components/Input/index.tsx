import React, { useState } from 'react';
import { Container, InputForm } from './style';

const InputComponent: React.FC = () => {
  const [focused, setIsFocused] = useState(false);
  const [selected, setIsSelected] = useState(false);
  return (
    <Container>
      <InputForm
      isFocused={focused}
      isSelected={selected}
      />
    </Container>
  );
};

export default InputComponent;
