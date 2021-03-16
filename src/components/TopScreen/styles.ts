import styled from 'styled-components';

export const TopScreenContainer = styled.div`
  display: flex;
`

export const Description = styled.div`
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
    height: 75px;
    padding: 10px 0 0 10px;
    border-radius: 5px;
    border: 1px solid #d2d4d4;
    margin-bottom: 12px;
    outline: none;
  }
`