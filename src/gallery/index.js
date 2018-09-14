import React from 'react';
import Gallery from 'react-photo-gallery';

import Row from '../components/row';
import Title from '../components/title';

const Images = [
  { url: '/static-gallery/2.jpg', aspectRatio: 1.3 },
  { url: '/static-gallery/3.jpg', aspectRatio: 1.5 },
  { url: '/static-gallery/4.jpeg', aspectRatio: 1.2 },
  { url: '/static-gallery/5.jpeg', aspectRatio: 1 },
  { url: '/static-gallery/1.jpg', aspectRatio: 1.3 },
  { url: '/static-gallery/6.jpeg', aspectRatio: 1.3 },
  { url: '/static-gallery/7.jpg', aspectRatio: 1.2 },
  { url: '/static-gallery/9.jpg', aspectRatio: 1.4 },
  { url: '/static-gallery/10.jpg', aspectRatio: 1.3 },
  { url: '/static-gallery/11.jpg', aspectRatio: 1.5 },
  { url: '/static-gallery/12.jpg', aspectRatio: 1.2 },
  { url: '/static-gallery/13.jpg', aspectRatio: 1.6 },
];

const preparePhoto = (photos) => {
  return photos.map(photo => ({
    src: photo.url,
    width: photo.width || 500,
    height: photo.height || 300,
    aspectRatio: photo.aspectRatio,
    lightboxImage: {
      src: photo.url
    }
  }))
}

const photos = preparePhoto(Images);

const title   = <strong>Nuestras Fotos - La Manuel Lobo</strong>;

const GalleryComponent = () =>
  <div>
    <Title title={title} />
    <Row>
      <div>
        <Gallery photos={photos} />
      </div>
    </Row>
  </div>;

export default GalleryComponent;
