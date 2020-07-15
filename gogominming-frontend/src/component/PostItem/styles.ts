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
    background-color: #f0f0f0;
    font-size: 15px;
    height: 150px;
    box-sizing: border-box;
  }

  & .comment_wrapper {
    font-size: 15px;
    box-sizing: border-box;
  }

  & .comment {
    background-color:#ffffff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;

    &:nth-child(2n) {
      background-color:#f0f0f0;
    }

    & .content {
      width: 900px;
    }

    & .vote {
      display: flex;
    }
  }

  & .comment_input {
    display: flex;

    & input {
      flex: 8;
    }
  }
`