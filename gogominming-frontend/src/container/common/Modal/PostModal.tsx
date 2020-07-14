import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { PostModal } from '../../../component';
import { uploadPost } from '../../../utils/apis/post';

const PostModalContainer = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<{
    title: string,
    content: string
  }>({title:'', content:''});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e

    setInput(prev => 
      ({
        ...prev,
        [target.name]: target.value
      })
    )
  }

  const Submit = () => {
    const jwt = localStorage.getItem('jwt')
    dispatch(uploadPost({jwt, title: input.title, content: input.content}));
  }

  return (
    <PostModal submit = {Submit} handleChange={handleChange} input={input}/>
  );
};

export default PostModalContainer;