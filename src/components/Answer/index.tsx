import React, { useState } from 'react';
import { AnswerContainer } from './styles';
import bin from '../../assets/bin.png'

const Answer: React.FC = () => {
  const [falseAnswer, setFalseAnswer] = useState(false)
  const [trueAnswer, setTrueAnswer] = useState(true)

  const clickFalse = () => {
    setFalseAnswer(true)
    setTrueAnswer(false)
  }

  const clickTrue = () => {
    setTrueAnswer(true)
    setFalseAnswer(false)
  }

  return (
    <AnswerContainer>
      <div className={falseAnswer === true ? "falseYes" : "falseNot"} onClick={clickFalse}></div>
      <div className={trueAnswer === false ? "trueNot" : "trueYes"} onClick={clickTrue}></div>
      <span>Todas as alternativas estão corretas</span>
      <img src={bin} alt="Ícone de lixeira"/>
    </AnswerContainer>
  );
}

export default Answer;