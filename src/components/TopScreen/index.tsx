import React from 'react';
import InputText from './InputText/index';
import InputSelect from './InputSelect/index';
import { TopScreenContainer, Description } from './styles';

const TopScreen: React.FC = () => {
  return (
    <TopScreenContainer>
      <div>
        <InputText
          label="Nome"
          placeholder="Ex: Gramática"
        />
        <InputText
          label="Código BNCC"
          placeholder="Ex: 87H93O0"
        />
      </div>
      <InputSelect />
      <Description>
        <label htmlFor="description">Descrição</label>
        <textarea id="description" placeholder="Ex: Essa atividade está sendo..."></textarea>
      </Description>
    </TopScreenContainer>
  )
}

export default TopScreen;