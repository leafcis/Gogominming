import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as S from './styles'

type HeaderProps = {
  nickname: string,
  mypost: [],
  mychat: []
}

const Header: React.FC<HeaderProps> = ({ nickname, mypost, mychat }) => {
  const dispatch = useDispatch();

  return (
    <S.HeaderWrapper>
      <div className="content">
        <span>고고밍밍</span>
        <div>
          {
            nickname ? 
            <div className="header_info">
              <Link to="/">메인</Link>
              <Link to="/mypage">마이페이지</Link>
              <div onClick={() => {
                localStorage.removeItem('jwt');
                dispatch({
                  type: "LOGOUT"
                })
              }}>로그아웃</div>
            </div>
            : 
            <>
              <Link to="/login">로그인</Link> / <Link to="/signup">회원가입</Link>
            </>
          }
        </div>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;