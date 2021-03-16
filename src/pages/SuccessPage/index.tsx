import React from 'react';
import { useHistory } from 'react-router-dom';
import logoClass from '../../assets/logo.png';
import { goBack } from '../../router/Coordinator';
import { SuccessContainer } from './styles';

const SuccessPage: React.FC = () => {
  const history = useHistory()

  return (
    <SuccessContainer>
      <h1>Cadastro realizado com sucesso!</h1>
      <img src={logoClass} alt=""/>
      <h3 onClick={() => goBack(history)}><u>Voltar para tela de Cadastro</u></h3>
    </SuccessContainer>
  );
}

export default SuccessPage;