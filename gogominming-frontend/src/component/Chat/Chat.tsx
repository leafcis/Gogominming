import React, { useState } from 'react';

import * as S from './styles'

type Props = {
  info: {
    title: string,
    _id: string,
    chatlog: Array<any>
  },
  send: any,
  input: string,
  handleInput: any
}

const Chat: React.FC<Props> = ({info, send, input, handleInput}) => {
  const {title, _id, chatlog} = info;
  console.log(chatlog)

  return (
    <S.ChatWrapper>
      <header>{title}</header>
      <main>
        <S.ChatLogWrapper>
          {
            chatlog.map(el => 
              <div className="chat_wrapper">
                <div className="chatter">
                  {el.name}
                </div>
                <div className="content">
                  {el.content}
                </div>
              </div>
            )
          }
        </S.ChatLogWrapper>
        <div className="input">
          <input value={input} onChange={handleInput}/>
          <button onClick={send}>전송</button>
        </div>
      </main>
    </S.ChatWrapper>
  );
};

export default Chat;