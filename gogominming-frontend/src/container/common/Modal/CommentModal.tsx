import React from 'react';

import { CommentModal } from '../../../component'

import { useSelector } from 'react-redux';
import { RootState } from '../../../reducer';

const CommentModalContainer = () => {
  const commentInfo = useSelector((state:RootState) => state.comment)

  return (
    <CommentModal comments={commentInfo}/>
  );
};

export default CommentModalContainer;