import React from 'react';
import { ButtonContainer } from './styles';

interface Props {
  add: () => void;
};

const AddButton: React.FC<Props> = ({
  add = () => {},
}) => {
  return <ButtonContainer
    onClick={add}
  >
    +
  </ButtonContainer>
}

export default AddButton;