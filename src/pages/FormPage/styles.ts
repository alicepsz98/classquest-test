import styled from 'styled-components';

export const FormContainer = styled.main`
  background: #f2fcff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 40px 50px 0 20px;
`

export const TopScreen = styled.div`
  display: flex;
`

export const DescriptionContainer = styled.div`
  margin-left: 15px;
  label {
    padding: 0 0 8px 10px;
    font-size: 90%;
    font-weight: 600;
    color: #717988;
  }
  textarea {
    display: flex;
    flex-direction: column;
    background: #f1f4f5;
    width: 380px;
    height: 82px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #d2d4d4;
    margin-bottom: 12px;
    outline: none;
  }
`

export const QuestionContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

export const FooterForm = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`