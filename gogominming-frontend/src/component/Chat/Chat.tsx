import React from 'react';

import * as S from './styles'

type Props = {
  target?: string
}

const Chat: React.FC<Props> = () => {
  let _target = "최지웅";

  return (
    <S.ChatWrapper>
      <header>{_target}</header>
      <main>
        <S.ChatLogWrapper>

        </S.ChatLogWrapper>
        <input />
      </main>
    </S.ChatWrapper>
  );
};

export default Chat;