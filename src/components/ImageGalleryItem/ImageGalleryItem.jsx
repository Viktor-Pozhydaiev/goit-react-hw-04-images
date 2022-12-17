import { Modal } from 'components/Modal/Modal';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const ImageGalleryItem = ({ webFormat, largeImag, tag }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <li className={css.image_gallery_item} onClick={toggleModal}>
      <img src={webFormat} className={css.image_gallery_item_image} alt={tag} />
      {showModal && (
        <Modal onClose={toggleModal} originalIMG={largeImag} tag={tag} />
      )}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webFormat: PropTypes.string.isRequired,
  largeImag: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
