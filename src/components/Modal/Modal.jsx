import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  static propTypes = {
    originalIMG: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  handlePressKey = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget !== event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { originalIMG, tag } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={originalIMG} alt={tag} />
        </div>
      </div>,
      modalRoot
    );
  }
}
// { originalIMG, tag, isOpenModal }
