import React from 'react';
import FinalButtons from '../../components/FinalButtons';
import Difficulty from '../../components/Difficulty';
import TopScreen from '../../components/TopScreen/index';
import QuestionArea from '../../components/QuestionArea';
import { FormContainer, FooterForm } from './styles';

const FormPage: React.FC = () => {
  return (
    <FormContainer>
      <TopScreen />
      <QuestionArea />
      <FooterForm>
        <Difficulty />
        <FinalButtons />
      </FooterForm>
    </FormContainer>
  );
}

export default FormPage;
