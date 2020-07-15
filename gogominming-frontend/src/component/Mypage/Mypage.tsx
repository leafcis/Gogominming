import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as S from './styles'
import { getMyCommentPostThunk } from '../../utils/apis/comment';

type MypageProps = {
  info: any
}

const Mypage: React.FC<MypageProps> = ({info}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const post = [...info.mypost]
  const chat = [...info.mychat]
  const history = useHistory();

  return (
    <S.MypageWrapper>
      <div className="nickname">{info.nickname}님</div>
      <div className="content">
        <div className="wrapper">
          <div className="title">내 고민</div>
          <div className="inner">
            {
              post.map((el:any) => 
                <div key={el._id} className="post_wrapper" onClick={() => [
                  dispatch(getMyCommentPostThunk({jwt, _id: el._id, title: el.title}))
                ]}>
                  <div className="post_title">{el.title}</div>
                  <div className="post_content">{el.post.slice(0, 10).concat("...")}</div>
                </div>
              )
            }
          </div>
        </div>
        <div className="wrapper">
          <div className="title">내 채팅</div>
          <div className="inner">
            {
              chat.map((el:any) => 
                <div key={el._id} className="post_wrapper" onClick={() => {
                  history.push(`/chat/${el._id}`)
                }}>
                  <div className="post_title">{el.title}</div>
                  <div className="post_content">{el.isQuestioner ? '질문자': '상담자'}</div>
                </div>
              )
            }
          </div>
          </div>
      </div>
    </S.MypageWrapper>
  );};

export default Mypage;