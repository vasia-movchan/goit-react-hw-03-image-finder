// import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageItem, largeImageItem, onModal }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={imageItem}
        alt=""
        onClick={() => onModal(largeImageItem)}
      />
    </GalleryItem>
  );
};
