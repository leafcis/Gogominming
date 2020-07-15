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
    padding: 10px 10px;
    box-sizing: border-box;

    & .input {
      width: 100%;
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      justify-content: space-between;

      & input {
        flex: 8;
      }

      & button {
        flex: 1;
      }
    }
  }
`

export const ChatLogWrapper = styled.div`
  & .chat_wrapper {
    margin-bottom: 10px;
    background-color: #fbfbfb;
    padding: 10px 10px;

    &:nth-child(2n) {
      background-color: #f0f0f0;
    }

    & .chatter {
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
`