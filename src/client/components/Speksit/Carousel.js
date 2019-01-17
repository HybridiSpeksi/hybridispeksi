import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import cuid from 'cuid';


const CarouselContainer = ({ images }) => {
  const urls = [];
  for (let i = 1; i <= images[0].numberOfImages; i += 1) {
    urls.push('/assets/images/carousel/' + images[0].year + '/' + images[0].year + '_' + i + '.jpg');
  }
  return (
    <Carousel showStatus={false} showThumbs={false} infiniteLoop>
      {urls.map(url => (
        // eslint-disable-next-line no-undef
        <div key={cuid()}>
          <img src={url} />
        </div>)) }
    </Carousel>
  );
};

CarouselContainer.propTypes = {
  images: PropTypes.array,
};


export default CarouselContainer;
