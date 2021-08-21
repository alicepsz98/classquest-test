import styled from 'styled-components';

export const DifficultyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  h5 {
    margin-right: 10px;
  }
  p {
    font-size: 90%;
    color: #717988;
    margin-right: 10px;
  }
  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
  }
  .easyYes {
    border: 1px solid green;
    background: green;
  }
  .easyNot {
    border: 1px solid green;
    background: white;
  }
  .averageYes {
    border: 1px solid orange;
    background: orange;
  }
  .averageNot {
    border: 1px solid orange;
    background: white;
  }
  .difficultYes {
    border: 1px solid red;
    background: red;
  }
  .difficultNot {
    border: 1px solid red;
    background: white;
  }
`;