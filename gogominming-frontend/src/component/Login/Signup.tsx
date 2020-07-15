import React, { ChangeEvent } from 'react';

import * as S from './styles'

type SignupProps = {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
  handleClickSignup: () => void,
  input: {
    uid: string,
    password: string,
    nickname: string
  }
}

const Signup: React.FC<SignupProps> = ({handleInput, handleClickSignup, input}) => {
  return (
    <S.LoginWrapper>
      <h1>고고민밍</h1>
      <S.LoginFormWrapper>
        <input name = "uid" value = {input.uid} onChange={handleInput} placeholder="아이디" type="text"/>
        <input name = "nickname" value = {input.nickname} onChange={handleInput} placeholder="닉네임" type="text"/>
        <input name = "password" value = {input.password} onChange={handleInput} placeholder="비밀번호" type="password"/>
        <button onClick={handleClickSignup}>로그인</button>
      </S.LoginFormWrapper>
    </S.LoginWrapper>
  );
};

export default Signup;