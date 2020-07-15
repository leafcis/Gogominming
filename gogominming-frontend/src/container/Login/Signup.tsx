import React, { useState , ChangeEvent } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Signup } from '../../component';
import { RootState } from '../../reducer';
import { signup } from '../../utils/apis';

const SignupContainer = () => {
  const loginInfo = useSelector((state: RootState) => state.auth)
  const history = useHistory()
  const [input, setInput] = useState<{uid: string, password: string, nickname: string}>({
    uid: '',
    password: '',
    nickname: ''
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setInput(prev => ({
      ...prev, 
      [target.name]: target.value
    })
    )
  }

  const handleClickSignup = async () => {
    try {
      await signup({uid: input.uid, password: input.password, nickname: input.nickname})
      history.push('/');
    }
    catch (error) {

    }
  }

  return (
      loginInfo.nickname ? 
      <Redirect to="/" /> : 
      <Signup
        handleInput={handleInput}
        handleClickSignup={handleClickSignup}
        input={input}
      />
  );
};

export default SignupContainer;