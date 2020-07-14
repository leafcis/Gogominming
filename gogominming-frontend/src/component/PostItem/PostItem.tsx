import React from 'react';

import * as S from './styles';

type PostItemProps = {
  _id: string,
  title: string,
  post: string,
  comment: Array<any>
}

const PostItem: React.FC<PostItemProps> = ({_id, title, post, comment}) => {
  return (
    <S.PostItemWrapper>
      <div className="title">{title}</div>
      <div className="post">{post}</div>
    </S.PostItemWrapper>
  );
};

export default PostItem;