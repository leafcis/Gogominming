import React, { ChangeEvent } from 'react';

import * as S from './styles';

type PostModalProps = {
  input: {
    title: string,
    content: string
  },
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  submit: () => void;
}

const PostModal: React.FC<PostModalProps> = ({submit, input, handleChange}) => {
  return (
    <S.PostModalWrapper>
      <input onChange={handleChange} value = {input.title} name="title" className="title" />
      <textarea onChange={handleChange} value = {input.content} name="content" className="content" />
      <button className="submit" onClick={submit}>전송</button>
    </S.PostModalWrapper>
  );
};

export default PostModal;