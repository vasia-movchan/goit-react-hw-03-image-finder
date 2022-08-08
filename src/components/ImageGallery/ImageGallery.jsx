// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageItem={image.webformatURL}
          onModal={openModal}
          largeImageItem={image.largeImageURL}
        />
      ))}
    </GalleryList>
  );
};
