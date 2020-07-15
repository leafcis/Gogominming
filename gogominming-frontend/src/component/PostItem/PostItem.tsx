import React, { useState } from 'react';

import * as S from './styles';
import { useDispatch } from 'react-redux';
import { commentPostThunk, doVoteCommentThunk } from '../../utils/apis'

type PostItemProps = {
  _id: string,
  title: string,
  post: string,
  comments: Array<any>
}

const PostItem: React.FC<PostItemProps> = ({_id, title, post, comments}) => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt')

  return (
    <S.PostItemWrapper>
      <div className="title">{title}</div>
      <div className="post">{post}</div>
      <div className="comment_wrapper">
        {comments.map(el => 
          <div className="comment">
            <div className="content">{el.content}</div>
            <div className="vote">
              <button onClick = {() => {
                dispatch(doVoteCommentThunk({jwt, _id: el._id, agree:true}))
              }}>추천</button>
              <button onClick = {() => {
                dispatch(doVoteCommentThunk({jwt, _id: el._id, agree:false}))
              }}>비추천</button>
            </div>
          </div>
        )}
      </div>
      <div className="comment_input">
        <input value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={() => {
          setInput('');
          dispatch(commentPostThunk({jwt, _id, comment: input}))}
        }>전송</button>
      </div>
    </S.PostItemWrapper>
  );
};

export default PostItem;