import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  margin-right: 50px;
  button {
    width: 120px;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 5px;
    font-weight: 600;
  }
  .cancel {
    background: #fc6868;
    :hover {
      background: red;
    }
  }
  .save {
    background: #73fa77;
    :hover {
      background: green;
    }
  }
`