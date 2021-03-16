import React from 'react';
import Answer from '../Answer/index';
import AddButton from '../AddButton/index';
import { QuestionCardContainer } from './styles';

interface Props {
  nameQuestion: string,
  question: string
}

const QuestionCard: React.FC<Props> = ({ nameQuestion, question }) => {
  return (
    <QuestionCardContainer>
      <h5>{nameQuestion}</h5>
      <p>{question}</p>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <AddButton />
    </QuestionCardContainer>
  );
}

export default QuestionCard;