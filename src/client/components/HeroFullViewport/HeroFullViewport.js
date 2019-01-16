import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroFullViewport.css';

/**
 *
 * @param {backgroundImage} param0
 * Renders full viewport hero with possible background-image. Renders content middle
 */

const HeroFullViewport = (props) => {
  const { backgroundImage } = props
  return (
    <div className={styles.container} style={{ background: 'url(' + backgroundImage + ') center bottom no-repeat / cover' }}>
      {props.children}
    </div>
  );
};

HeroFullViewport.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.any,
};

export default HeroFullViewport;
