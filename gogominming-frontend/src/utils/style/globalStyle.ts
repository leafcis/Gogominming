import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffa399;
    margin: 0 0 0 0;
  }

  @font-face { font-family: 'MaplestoryOTFBold'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff'); font-weight: normal; font-style: normal; }

  
  * {
    text-decoration: none;
    font-family: 'MaplestoryOTFBold';
    border: none;
  }
`
export const PageWrapper = styled.div`
  min-width: 1080px;
  max-width: 1080px;
  height: calc(100vh - 70px);
  margin: 0 auto;
`