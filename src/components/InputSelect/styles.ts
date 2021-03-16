import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-left: 20px;
  label {
    padding: 5px 0 8px 10px;
    font-size: 90%;
    font-weight: 600;
    color: #717988;
  }
  select {
    color: #717988;
    display: flex;
    flex-direction: column;
    background: #f1f4f5;
    width: 160px;
    height: 29px;
    padding: 5px 5px 0 10px;
    border-radius: 5px;
    border: 1px solid #d2d4d4;
    margin-bottom: 12px;
    outline: none;
    vertical-align: center;
  }
`