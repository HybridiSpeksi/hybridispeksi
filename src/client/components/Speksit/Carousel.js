import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';


const CarouselContainer = ({images}) => {

	let urls = [];
	for (let i = 1; i <= images[0].numberOfImages; i++){
		urls.push('/assets/images/carousel/' + images[0].year + '/' + images[0].year + '_' + i + '.jpg');
	}
	return (
	  <Carousel showStatus={false} showThumbs={false} infiniteLoop={true}>
	    {urls.map((url,i) => 
		    <div key={i}>
		      <img src={url} />
		    </div>
	    )}
	  </Carousel>
	)	
};

CarouselContainer.propTypes = {
  images: PropTypes.array,
};


export default CarouselContainer;
