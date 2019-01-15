import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.css';
import HeroFullViewport from '../HeroFullViewport/HeroFullViewport';

const Hero = ({ globalStyles }) => (
  <HeroFullViewport backgroundImage="/assets/images/speksi2019bg.png">
    <div className={styles.headerContainer}>
      <h1 className={`${globalStyles.bigHeading} ${styles.bigsubHeading}`}>Hybridispeksi 2019</h1>
      <h1 className={`${globalStyles.bigHeading} ${styles.bigHeading}`}>Viimeinen Lohikäärmeisku</h1>
      <p className={`${globalStyles.subHeading} ${styles.subHeading}`}>
        Ensi-ilta 27.3. <br />@Manilla
      </p>
    </div>
  </HeroFullViewport>
);

Hero.propTypes = {
  globalStyles: PropTypes.any,
};

export default Hero;
