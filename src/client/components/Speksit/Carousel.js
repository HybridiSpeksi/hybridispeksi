import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import PropTypes from 'prop-types';
import './Carousel.css';

/**
 *
 * @param {backgroundImage} param0
 * Renders full viewport hero with possible background-image. Renders content middle
 */


const CarouselContainer = props => (
  <Carousel>
    <div>
      <img src="assets/images/carousel/2018/2018_1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="assets/images/carousel/2018/2018_2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="assets/images/carousel/2018/2018_3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);


export default CarouselContainer;
