import React from 'react';
import styles from './Home.css';

const Hero = () => (
  <div className={'row justify-content-center align-items-center ' + styles.content_home}>
    <div className={'col-sm-12 col-xl-11  align-items-center ' + styles.slogan}>
      <div className={'d-md-block align-items-center ' + styles.slogan}>
        <h1 className={styles.sloganh1}>Hybridispeksi 2019</h1>
        <p className={styles.slogandate}>
                    Ensi-ilta 27.3.<br />
                    @Manilla
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
