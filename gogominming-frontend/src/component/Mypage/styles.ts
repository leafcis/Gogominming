import styled from 'styled-components';

export const MypageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 50px;

  & .nickname {
    font-size: 30px;
  }

  & .content {
    width: 100%;
    display: flex;
    height: 100%;
        
    & .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      box-sizing: border-box;
      padding: 20px;
      height: 100%;

      & .inner {
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        padding: 20px 30px;
        box-sizing: border-box;

        & .post_wrapper {
          border-radius: 15px;
          border: 1px solid #cbcbcb;
          padding: 5px 10px;
          margin-bottom: 10px;
          width: 300px;

          & .post_title {
            font-size: 30px;
            margin-bottom: 5px;
          }

          & .post_content {
            font-size: 20px;
          }
        }
      }
    }
  }
`