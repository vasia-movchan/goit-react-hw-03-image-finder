// import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageItem }) => {
  return (
    <GalleryItem>
      <GalleryImage src={imageItem} alt="" />
    </GalleryItem>
  );
};
