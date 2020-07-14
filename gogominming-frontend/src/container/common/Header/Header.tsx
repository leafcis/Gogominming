import React from 'react';
import { Header } from '../../../component';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducer';

const HeaderContainer = () => {
  const loginInfo = useSelector((state: RootState) => state.auth);

  return (
    <Header {...loginInfo}/>
  );
};

export default HeaderContainer;