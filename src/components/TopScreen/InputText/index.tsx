import React from 'react';
import { InputContainer } from './styles';

interface Props {
  placeholder: string,
  label: string
}

const InputText: React.FC<Props> = ({ placeholder, label }) => {
  return (
    <InputContainer>
      <label htmlFor="inputText">{label}</label>
      <input
        id="inputText"
        placeholder={placeholder}
        type="text"
      />
    </InputContainer>
  );
}

export default InputText;