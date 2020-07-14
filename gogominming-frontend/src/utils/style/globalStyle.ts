import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffa399;
    margin: 0 0 0 0;
  }
`
export const PageWrapper = styled.div`
  min-width: 1080px;
  max-width: 1080px;
  height: calc(100vh - 70px);
  margin: 0 auto;
`