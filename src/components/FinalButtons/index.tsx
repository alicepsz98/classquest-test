import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToSuccess }  from '../../router/Coordinator';
import { ButtonsContainer } from './styles';

const FinalButtons: React.FC = () => {
  const history = useHistory()

  const cancelForm = () => {
    alert("Tem certeza que deseja cancelar este cadastro?")
  }

  return (
    <ButtonsContainer>
      <button className="cancel" onClick={cancelForm}>Cancelar</button>
      <button className="save" onClick={() => goToSuccess(history)}>Salvar</button>
    </ButtonsContainer>
  ) 
}

export default FinalButtons;