import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #f5ab92;
  box-sizing: border-box;

  & .content {
    min-width: 1080px;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
`