import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Mypage } from '../../component';
import { RootState } from '../../reducer';
import { mypageThunk } from '../../utils/apis/post';

const MypageContainer = () => {
  const info = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    dispatch(mypageThunk({jwt}));
  }, [])

  return (
    info.nickname ?
      <Mypage info={info}/>
      :
      <Redirect to="/"/>
  );
};

export default MypageContainer;