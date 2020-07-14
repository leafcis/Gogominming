import React from 'react';

import { PostItem } from '../';
import { useDispatch } from 'react-redux';

import * as S from './styles'

type MainProps = {
  postData: any,
  isLogin: boolean
}

const Main: React.FC<MainProps> = ({isLogin, postData}) => {
  const dispatch = useDispatch();
  const postDataList = postData.map((el: any) => 
    <PostItem {...el}/>
  ) || <div>로딩중...</div>;

  return (
    <S.MainWrapper>
      {
        isLogin ? 
        <>
          <div className="header">
            <button onClick={() => {
              dispatch({
                type: "SELECT",
                modal: 'post'
              })
            }}>고민 게시</button>
          </div>
          <div className="content">
            {postDataList}
          </div>
        </>
         :
        <>
          <div className="auth_warn">로그인이 필요한 컨텐츠입니다.</div>
        </>
      }
    </S.MainWrapper>
  );};

export default Main;