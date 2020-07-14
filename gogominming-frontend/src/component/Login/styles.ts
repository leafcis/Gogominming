import styled, { css } from 'styled-components';

const inputSize = css`
  width: 300px;
  height: 50px;
  border-radius: 16px;
  border: none;
  font-size: 15px;
`

export const LoginWrapper = styled.div`
  width: 100%;
  min-width: 900px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginFormWrapper = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & input {
    ${inputSize}
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #9f9f9f;
    padding: 10px 15px;

    &:focus {
      outline: none;
      border: 1px solid #ff7199;
    }
  }

  & button {
    ${inputSize}
    background-color: #ff717d;
    transition: all .1s;

    &:focus {
      outline: none;
    }

    &:active {
      transform: translate(-3px, 3px);
      box-shadow: 3px -3px 33px -9px rgba(0,0,0,0.75);
    }
  }
`