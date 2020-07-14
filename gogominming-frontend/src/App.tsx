import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Router from './utils/router';

import { G } from './utils/style';

import { postThunk } from './utils/apis';
import { RootState } from './reducer';

const App = () => {
  const dispatch = useDispatch();
  const info = useSelector((state: RootState) => state.auth)
  const loginInfo = localStorage.getItem('loginInfo') as string;
  const jwt = localStorage.getItem('jwt');
  const loginInfoObject = JSON.parse(loginInfo);

  useEffect(() => {
    if(jwt) {
      dispatch(postThunk({jwt}));

      dispatch({
        type: "LOGIN",
        ...loginInfoObject,
        post: [],
        chat: []
      })
    }
  }, [info.nickname]);

  return (
    <div className="App">
      <G.GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
