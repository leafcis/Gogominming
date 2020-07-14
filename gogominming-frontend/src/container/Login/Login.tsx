import React, { useState , ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Login } from '../../component';
import { RootState } from '../../reducer';
import { loginThunk } from '../../utils/apis';

const LoginContainer = () => {
  const loginInfo = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch();
  const [input, setInput] = useState<{uid: string, password: string}>({
    uid: '',
    password: ''
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setInput(prev => ({
      ...prev, 
      [target.name]: target.value
    })
    )
  }

  const handleClickLogin = () => {
    dispatch(loginThunk({uid: input.uid, password: input.password}));
  }

  return (
      loginInfo.nickname ? 
      <Redirect to="/" /> : 
      <Login 
        handleInput={handleInput}
        handleClickLogin={handleClickLogin}
        input={input}
      />
  );
};

export default LoginContainer;