import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ originalIMG, tag, onClose }) => {
  useEffect(() => {
    const handlePressKey = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handlePressKey);
    return () => {
      window.removeEventListener('keydown', handlePressKey);
    };
  });

  const handleBackdropClick = event => {
    if (event.currentTarget !== event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={originalIMG} alt={tag} />
      </div>
    </div>,
    modalRoot
  );
};
Modal.propTypes = {
  originalIMG: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
