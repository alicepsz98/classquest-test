import styled from 'styled-components';

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0;
  margin-bottom: 10px;
  div {
    cursor: pointer;
    margin: 0 5px 0 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .falseYes {
    border: 1px solid red;
    background: red;
  }
  .falseNot {
    border: 1px solid red;
    background: white;
  }
  .trueNot {
    border: 1px solid green;
    background: white;
  }
  .trueYes {
    border: 1px solid green;
    background: green;
  }
  span {
    font-size: 80%;
    width: 270px;
    border-radius: 5px;
    border: 1px solid #d2d4d4;
    color: #717988;
    padding: 10px;
  }
  img {
    cursor: pointer;
    width: 15px;
    padding-left: 5px;
  }
`