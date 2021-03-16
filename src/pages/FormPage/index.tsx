import React from 'react';
import AddButton from '../../components/AddButton';
import InputSelect from '../../components/InputSelect';
import InputText from '../../components/InputText';
import QuestionCard from '../../components/QuestionCard';
import FinalButtons from '../../components/FinalButtons';
import Difficulty from '../../components/Difficulty';
import { FormContainer, TopScreen, DescriptionContainer, QuestionContainer, FooterForm } from './styles';

const FormPage: React.FC = () => {
  return (
    <FormContainer>
      <TopScreen>
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
        <DescriptionContainer>
          <label htmlFor="description">Descrição</label>
          <textarea id="description" placeholder="Ex: Essa atividade está sendo..."></textarea>
        </DescriptionContainer>
      </TopScreen>
      <QuestionContainer>
        <QuestionCard
          nameQuestion="Questão 1"
          question="Marque a alternativa que apresenta equívoco de escolha lexical:"
        />
        <QuestionCard
          nameQuestion="Questão 2"
          question="Marque a alternativa que apresenta equívoco de escolha lexical:"
        />
        <AddButton />
      </QuestionContainer>
      <FooterForm>
        <Difficulty />
        <FinalButtons />
      </FooterForm>
    </FormContainer>
  );
}

export default FormPage;
