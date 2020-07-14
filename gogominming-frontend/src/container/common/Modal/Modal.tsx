import React from 'react';

import { Modal } from '../../../component';
import PostModal from './PostModal'
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducer';

const ModalContainer = () => {
  const modalInfo = useSelector((state: RootState) => state.modal.currModal);

  const returnModal = (modalType: string): React.ReactElement | null => {
    switch (modalType) {
      case "post":
        return <PostModal />;
      default:
        return null;
    }
  }

  const modal = returnModal(modalInfo);

  return (
    modalInfo ? 
    <Modal>
      { modal }
    </Modal>
    :
    null
  );
};

export default ModalContainer;