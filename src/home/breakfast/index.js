import React from 'react';
import Gallery from 'react-photo-gallery';

import Row from '../../components/row';

const preparePhoto = (urls) => {
  return urls.map(url => ({
    src: url,
    width: 700,
    height: 500,
    aspectRatio: 1.5,
    lightboxImage: {
      src: url
    }
  }))
}

const photos = [
  'manuel_lobo.jpg',
  'manuel_lobo_2.jpg',
  'manuel_lobo_3.jpg',
  'manuel_lobo_4.png',
  'manuel_lobo_5.png',
  'manuel_lobo_6.png',
];

const Breakfast = () => {
    return (
      <Row>
        <div>
          <Gallery photos={preparePhoto(photos)} />
        </div>
      </Row>
  )
  };

export default Breakfast;
