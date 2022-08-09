import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export const Modal = ({ largeImg, closeModal }) => {
  return (
    <Overlay onClick={e => closeModal(e)}>
      <ModalStyled>
        <img src={largeImg} alt="" />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
