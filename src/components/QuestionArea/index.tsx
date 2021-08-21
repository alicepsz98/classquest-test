import React from 'react';
import AddButton from './AddButton/index';
import QuestionCard from './QuestionCard/index';
import { QuestionAreaContainer } from './styles';

const QuestionArea: React.FC = () => {

  const quests = [
    <QuestionCard
      nameQuestion="Questão 1"
      question="Marque a alternativa que apresenta equívoco de escolha lexical:"
    />,
    <QuestionCard
      nameQuestion="Questão 2"
      question="Marque a alternativa que apresenta equívoco de escolha lexical:"
    />,
  ];
  const addQuest = () => {
    quests.push(
      ...quests, 
      <QuestionCard
        nameQuestion="Questão 2"
        question="Marque a alternativa que apresenta equívoco de escolha lexical:"
      />
    )
  }
  return (
    <QuestionAreaContainer>
        {quests.map(quest => quest)}
        <AddButton 
          add={() => addQuest()}
        />
      </QuestionAreaContainer>
  )
}

export default QuestionArea;