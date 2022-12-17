import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { PropTypes } from 'prop-types';

export class ImageGalleryItem extends Component {
  static propTypes = {
    webFormat: PropTypes.string.isRequired,
    largeImag: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  };

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    const { webFormat, largeImag, tag } = this.props;
    return (
      <li className={css.image_gallery_item} onClick={this.toggleModal}>
        <img
          src={webFormat}
          className={css.image_gallery_item_image}
          alt={tag}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} originalIMG={largeImag} tag={tag} />
        )}
      </li>
    );
  }
}
