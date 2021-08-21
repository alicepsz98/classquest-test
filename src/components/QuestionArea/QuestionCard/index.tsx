import React from 'react';
import Answer from './Answer/index';
import AddButton from '../AddButton/index';
import { QuestionCardContainer } from './styles';

interface Props {
  nameQuestion: string,
  question: string
};

const QuestionCard: React.FC<Props> = ({ 
  nameQuestion, 
  question, 
}) => {
  const questions = [
    <Answer />,
    <Answer />,
    <Answer />,
    <Answer />,
  ]
  const addQuestion = () => {
    questions.push(...questions, <Answer />)
  }
  return (
    <QuestionCardContainer>
      <h5>{nameQuestion}</h5>
      <p>{question}</p>
      {questions.map(question => question)}
      <AddButton add={() => addQuestion()}/>
    </QuestionCardContainer>
  );
}

export default QuestionCard;