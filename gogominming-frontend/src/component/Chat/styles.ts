import styled from 'styled-components';

export const ChatWrapper = styled.div`
  width: 100%;
  box-shadow: 3px -3px 33px -9px rgba(0,0,0,0.75);
  height: 100%;

  & header {
    width: 100%;
    padding: 25px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .7);
    font-size: 30px;
  }

  & main {
    width: 100%;
    height: calc(100% - 90px);
    background-color: #ffffff;
    position: relative;

    & input {
      position: absolute;
      width: 100%;
      height: 30px;
      font-size: 17px;
      box-sizing: border-box;
      bottom: 0;
    }
  }
`

export const ChatLogWrapper = styled.div`

`