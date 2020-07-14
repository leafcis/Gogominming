import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles'

type HeaderProps = {
  nickname: string,
  mypost: [],
  mychat: []
}

const Header: React.FC<HeaderProps> = ({ nickname, mypost, mychat }) => {
  return (
    <S.HeaderWrapper>
      <div className="content">
        <span>고고밍밍</span>
        <div>
          {
            nickname ? nickname : 
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