import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';

class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { closeModal } = this.props;
    window.addEventListener('keydown', closeModal);
  }

  componentWillUnmount() {
    const { closeModal } = this.props;
    window.removeEventListener('keydown', closeModal);
  }

  render() {
    const { largeImg, closeModal } = this.props;

    return (
      <Overlay onClick={e => closeModal(e)}>
        <ModalStyled>
          <img src={largeImg} alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}

export default Modal;
