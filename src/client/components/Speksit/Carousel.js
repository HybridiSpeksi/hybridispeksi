import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';
import ImageSlider from 'react-responsive-carousel';

/**
 *
 * @param {backgroundImage} param0
 * Renders full viewport hero with possible background-image. Renders content middle
 */


const Carousel = ( props ) => {
  return (
    <ImageSlider>
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
    </ImageSlider>
  );
};


export default Carousel;
