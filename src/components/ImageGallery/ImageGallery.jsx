import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import { PropTypes } from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.image_gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
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
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
