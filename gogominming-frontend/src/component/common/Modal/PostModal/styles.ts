import styled from 'styled-components';

export const PostModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 20px;

  & .title {
    height: 30px;
  }

  & .content {
    height: 500px;
    resize: none;
  }
`