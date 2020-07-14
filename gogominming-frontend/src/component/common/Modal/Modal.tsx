import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';

type ModalProps = {
  children: any
}

const Modal: React.FC<ModalProps> = ({children}) => {
  const dispatch = useDispatch();

  return (
    <S.ModalBackground onClick={() => dispatch({
      type: "OFF_MODAL"
    })}>
      <S.ModalWrapper onClick={e => e.stopPropagation()}>
        {children}
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default Modal;