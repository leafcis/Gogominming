import React from 'react';

import * as S from './styles';

type CommentModalProps = {
  comments: Array<any>
}

const CommentModal: React.FC<CommentModalProps> = ({comments}) => {
  return (
    <S.CommentModalWrapper>
      {
        comments.map(el => {
          
        })
      }
    </S.CommentModalWrapper>
  );
};

export default CommentModal;