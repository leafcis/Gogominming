import React, { useEffect, useState, ChangeEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Chat, ChatItem } from '../../component';

import { useParams,useHistory } from 'react-router-dom';
import socketio from 'socket.io-client';

import { joinChat } from '../../utils/apis';
import { RootState } from '../../reducer';

const socket = socketio.connect('http://localhost:8000');

const ChatContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const authInfo = useSelector((state: RootState) => state.auth);
  const jwt = localStorage.getItem('jwt') as string;
  const [input, setInput] = useState('');

  const [info, setInfo] = useState<{
    info: any,
    isQuestioner: boolean
  }>({info: {
    chatlog: []
  }, isQuestioner: false})

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const send = () => {
    setInput('');
    const name = info.isQuestioner ? "질문자" : "상담가";
    socket.emit('message', id, name, input);
  }

  const recieve = (name: string, message:string) => {
      setInfo(prev => ({
        ...prev,
        info: {
          ...prev.info,
          chatlog: [
            ...prev.info.chatlog,
            {
              name,
              content: message
            }
          ]
        }
      }))
  }

  useEffect(() => {
    (async function() {
      try {
        const result = await joinChat({jwt, _id: id})
        setInfo({...result});
        socket.emit('join', id);
        socket.on('message', recieve)
      }
      catch (error) {
        history.push('/login');
      }
    })()
    return () => {
      socket.emit('leave', id);
      socket.off('message', recieve);
    }
  }, [])

  return (
    <Chat {...info} handleInput={handleInput} input = {input} send={send}/>
  );
};

export default ChatContainer;