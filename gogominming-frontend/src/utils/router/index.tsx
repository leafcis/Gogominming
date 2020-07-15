import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { G } from '../style'

import { LoginContainer, HeaderContainer, MypageContainer, ChatContainer, MainContainer, ModalContainer, SignupContainer } from '../../container';

const Router = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/signup" exact component={SignupContainer} />
      <Route path="/" render={() =>
        <>
          <HeaderContainer />
          <G.PageWrapper>
          <ModalContainer />
            <Switch>
              <Route path="/" exact component={MainContainer} />
              <Route path="/mypage" exact component={MypageContainer} />
              <Route path="/chat/:id" component={ChatContainer} />
              <Redirect to="/"/>
            </Switch>
          </G.PageWrapper>
        </>
      } />
    </Switch>
  );
};

export default Router;