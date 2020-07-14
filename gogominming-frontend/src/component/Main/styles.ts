import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  & .auth_warn {
    font-size: 40px;
  }

  & .header {
    width: 100%;
    margin-top: 10px;
    justify-self: flex-end;
  }

  & .content {
    width: 100%;
  }
`