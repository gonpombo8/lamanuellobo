import React from 'react';
import { Carousel } from 'react-bootstrap';

import Row from '../../components/row';
import Title from '../../components/title';


const photos = [
  'manuel_lobo.jpg',
  'manuel_lobo_2.jpg',
  'manuel_lobo_3.jpg',
  'manuel_lobo_4.png',
  'manuel_lobo_5.png',
];

const Gallery = () => {
  const style = { maxHeight: '520px' };
  const title = <strong>Posada La Manuel Lobo</strong>
  return (
    <Row>
      <Title title={title} />
      <div className="col-lg-12 text-center">
        <Carousel className="mt30">
          <Carousel.Item>
            <img style={style} className="img-responsive img-full" role="presentation" src={photos[0]}/>
          </Carousel.Item>
          <Carousel.Item>
            <img style={style} className="img-responsive img-full" role="presentation" src={photos[1]}/>
          </Carousel.Item>
          <Carousel.Item>
            <img style={style} className="img-responsive img-full" role="presentation" src={photos[2]}/>
          </Carousel.Item>
          <Carousel.Item>
            <img style={style} className="img-responsive img-full" role="presentation" src={photos[3]}/>
          </Carousel.Item>
          <Carousel.Item>
            <img style={style} className="img-responsive img-full" role="presentation" src={photos[4]}/>
          </Carousel.Item>
        </Carousel>
      </div>
    </Row>
  );
};

export default Gallery;
