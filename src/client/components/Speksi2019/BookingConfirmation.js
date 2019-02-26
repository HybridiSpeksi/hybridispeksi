import React from 'react';
import styles from './BookingConfirmation.css';
import PageHero from '../PageHero/PageHero';

const BookingConfirmation = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.pageHero}>
        <PageHero title="Lipun ostaminen onnistui!" subTitle="Tervetuloa katsomaan HybridiSpeksiä 2019!" />
      </div>
      <div className={styles.instructionsContainer}>
        <div className={styles.instructions}>
          <h2>Ohjeita jatkoon</h2>
          <div className={styles.instructionsList}>
            <ul>
              <li>Saat pian varausvahvistuksen sähköpostiisi</li>
              <li>Varausvahvistus sisältää varaustunnuksen joka toimii lippuna näytökseen. Sitä ei siis tarvitse erikseen lunastaa.
              </li>
              <li>Mikäli herää kysyttävää, ota rohkeasti yhteyttä lipunmyynti@hybridispeksi.fi.
              </li>
              <li>Nähdään teatterilla!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
