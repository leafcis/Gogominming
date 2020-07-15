import React from 'react';

import * as S from './styles';

import { useHistory } from 'react-router-dom';
import {createChat} from '../../../../utils/apis';
import { useDispatch } from 'react-redux'

type CommentModalProps = {
  comments: any,
}

const CommentModal: React.FC<CommentModalProps> = ({comments}) => {
  const history = useHistory();
  const jwt = localStorage.getItem('jwt') as string;
  const dispatch = useDispatch();

  return (
    <S.CommentModalWrapper>
      {
        comments.comments.map((el: any) => 
          <div className="comments" onClick = {async () => {
            dispatch({
              type: "OFF_MODAL"
            })
            const chat_id = await createChat({jwt, _id: el._id, title: comments.title});
            history.push(`/chat/${chat_id}`)
          }}>
            {el.content}
          </div>
        )
      }
    </S.CommentModalWrapper>
  );
};

export default CommentModal;