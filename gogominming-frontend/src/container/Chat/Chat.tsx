import React from 'react';

import { Chat, ChatItem } from '../../component';

const chat = [{
  message: "hello",
  me: false
}]

const ChatContainer = () => {
  chat.map(el => {
    return <div></div>
  })

  return (
    <Chat />
  );
};

export default ChatContainer;