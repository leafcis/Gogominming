import styled from 'styled-components';

export const PostItemWrapper = styled.div`
  width: 100%;
  box-shadow: 3px -3px 33px -9px rgba(0,0,0,0.75);
  margin-top: 20px;

  & .title {
    padding: 10px 20px;
    background-color: #ffffff;
    font-size: 30px;
  }

  & .post {
    padding: 10px 20px;
    background-color: #fbfbfb;
    font-size: 15px;
    height: 150px;
    box-sizing: border-box;
  }
`