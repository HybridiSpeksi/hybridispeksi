import React from 'react';
import styles from './SpeksiHero.css';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.headerTexts}>
      <h1 className={`${styles.bigsubHeading}`}>Hybridispeksi 2019</h1>
      <h1 className={`${styles.bigHeading}`}>Viimeinen Lohikäärmeisku</h1>
      <p className={`${styles.subHeading}`}>
          Lipunmyynti aukeaa keskiviikkona 27.2.
      </p>
    </div>
    <div className={`${styles.instructionsContainer}`}>
      <div className={styles.instructions}>
        <h3>Toimi näin</h3>
        <ol className={`${styles.instructions_list}`}>
          <li>Valitse haluamasi näytös</li>
          <li>Täytä tietosi</li>
          <li>Tarkista, että täyttämäsi tiedot ovat oikein</li>
          <li>Sinut ohjataan Paytrailin maksupalveluun</li>
        </ol>
      </div>
    </div>
  </div>
);

export default Hero;
