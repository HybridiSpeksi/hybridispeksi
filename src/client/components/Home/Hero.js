import React from 'react';
import styles from './Home.css';
import HeroFullViewport from '../HeroFullViewport/HeroFullViewport';

const Hero = () => (
  <HeroFullViewport backgroundImage="/assets/images/speksi2019bg.png">
    <div className={'d-md-block ' + styles.slogan}>
      <h1 className={styles.heading}>Hybridispeksi 2019</h1>
      <h1 className={styles.speksiName}>Viimeinen Lohikäärmeisku</h1>
      <p className={styles.subHeading}>
        Ensi-ilta 27.3. <br/>@Manilla
      </p>
    </div>
  </HeroFullViewport>
);

export default Hero;
