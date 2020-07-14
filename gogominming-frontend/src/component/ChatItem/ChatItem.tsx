import React from 'react';

import * as S from './styles'

type Props = {
  message: string,
  me: boolean
}

const ChatItem: React.FC<Props> = ({message, me}) => {
  return (
    <S.ChatItemWrapper>
      
    </S.ChatItemWrapper>
  );
};

export default ChatItem;