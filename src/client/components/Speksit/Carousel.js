import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';

/**
 *
 * @param {backgroundImage} param0
 * Renders full viewport hero with possible background-image. Renders content middle
 */


const Carousel = ({name, images}) => {


	// Next/previous controls
	const plusSlides = ({n}) => {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	const currentSlide = ({n}) => {
	  showSlides(slideIndex = n);
	}

	const showSlides = ({n}) => {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  console.log(slides);
	  let dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none"; 
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block"; 
	  dots[slideIndex-1].className += " active";
	}

	let slideIndex = 1;
	showSlides(slideIndex);

  return (
  	<div>
	    <div className="slideshow-container">
		  <div className="mySlides fade">
		    <div className="numbertext">1 / 3</div>
		    <img src='/assets/images/carousel/alaammuohi/alaammuohi1.jpg' style="width:100%"/>
		{/* <img src={{ '/assets/images/carousel/' + name + '/' + name '1.jpg' }} style="width:100%"/> */}
		    <div className="text">Caption Text</div>
		  </div>

		  <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
		  <a className="next" onClick="plusSlides(1)">&#10095;</a>
		</div>
		<br/>

		<div style="text-align:center">
		  <span className="dot" onClick="currentSlide(1)"></span> 
		</div>
	</div>
  );
};

Carousel.propTypes = {
  name: PropTypes.string,
  images: PropTypes.string,
};

export default Carousel;
