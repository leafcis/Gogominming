import React from 'react';
import { Main } from '../../component';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

const MainContainer = () => {
  const isLogin = (localStorage.getItem('jwt') && true) || false;
  const postData = useSelector((state: RootState) => state.post.post) || [];

  return (
    <Main isLogin={isLogin} postData={postData}/>
  );
};

export default MainContainer;