import React from 'react';
import styles from './SpeksiHero.css';
import HeroFullViewport from '../HeroFullViewport/HeroFullViewport';

const Hero = () => (
  <HeroFullViewport>
    <div className={styles.headerContainer}>
      <h1 className={`${styles.bigsubHeading}`}>Hybridispeksi 2019</h1>
      <h1 className={`${styles.bigHeading}`}>Viimeinen Lohikäärmeisku</h1>
      <p className={`${styles.subHeading}`}>
        Lipunmyynti aukeaa keskiviikkona 27.2.
      </p>
      <div className={`${styles.instructions}`}>
        <h3>Ohjeet lipunmyyntiin</h3>
        <ol className={`${styles.instructions_list}`}>
          <li>Valitse haluamasi näytös</li>
          <li>Täytä tietosi</li>
          <li>Tarkista, että täyttämäsi tiedot ovat oikein</li>
          <li>Maksa lippusi verkkopankissa</li>
        </ol>
      </div>
    </div>
  </HeroFullViewport>
);

export default Hero;
