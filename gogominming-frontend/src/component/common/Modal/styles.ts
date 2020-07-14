import styled from 'styled-components';

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
`