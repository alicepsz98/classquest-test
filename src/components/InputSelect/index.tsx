import React from 'react';
import { InputContainer } from './styles';

const InputSelect: React.FC = () => {
  return (
    <InputContainer>
      <label htmlFor="subject">Matéria</label>
      <select id="subject">
        <option>Português</option>
        <option>Matemática</option>
        <option>Biologia</option>
        <option>Geografia</option>
        <option>Inglês</option>
        <option>Espanhol</option>
      </select>
      <label htmlFor="class">Add na turma</label>
      <select id="class">
        <option>1º ano A</option>
        <option>1º ano B</option>
        <option>2º ano A</option>
        <option>3º ano C</option>
        <option>3º ano D</option>
      </select>
    </InputContainer>
  );
}

export default InputSelect;