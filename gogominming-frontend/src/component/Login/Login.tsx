import React, { ChangeEvent } from 'react';

import * as S from './styles'

type LoginProps = {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
  handleClickLogin: () => void,
  input: {
    uid: string,
    password: string
  }
}

const Login: React.FC<LoginProps> = ({handleInput, handleClickLogin, input}) => {
  return (
    <S.LoginWrapper>
      <h1>고고민밍</h1>
      <S.LoginFormWrapper>
        <input name = "uid" value = {input.uid} onChange={handleInput} placeholder="아이디" type="text"/>
        <input name = "password" value = {input.password} onChange={handleInput} placeholder="비밀번호" type="password"/>
        <button onClick={handleClickLogin}>로그인</button>
      </S.LoginFormWrapper>
    </S.LoginWrapper>
  );
};

export default Login;