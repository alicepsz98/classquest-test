import React, { useState } from 'react';
import { DifficultyContainer } from './styles';

const Difficulty: React.FC = () => {
  const [easy, setEasy] = useState(true)
  const [average, setAverage] = useState(false)
  const [difficult, setDifficult] = useState(false)

  const clickEasy = () => {
    setEasy(true)
    setAverage(false)
    setDifficult(false)
  }

  const clickAverage = () => {
    setEasy(false)
    setAverage(true)
    setDifficult(false)
  }

  const clickDifficult = () => {
    setEasy(false)
    setAverage(false)
    setDifficult(true)
  }

  return (
    <DifficultyContainer>
      <h5>Dificuldade:</h5>
      <p>Fácil</p>
      <div className={easy ? "easyYes" : "easyNot"} onClick={clickEasy}></div>
      <p>Média</p>
      <div className={average ? "averageYes" : "averageNot"} onClick={clickAverage}></div>
      <p>Difícil</p>
      <div className={difficult ? "difficultYes" : "difficultNot"} onClick={clickDifficult}></div>
    </DifficultyContainer>
  )
}

export default Difficulty;