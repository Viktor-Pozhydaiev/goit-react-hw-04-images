import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import { PropTypes } from 'prop-types';
import { nanoid } from '../../../node_modules/nanoid/index';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.image_gallery}>
      {images.map(({ webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={nanoid()}
            webFormat={webformatURL}
            largeImag={largeImageURL}
            tag={tags}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
