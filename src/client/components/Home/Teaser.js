import React from 'react';
import PropTypes from 'prop-types';
import styles from './Teaser.css';

const Teaser = ({ globalStyles }) => (
  <div className={styles.teaserRow}>
    <div className={styles.teaser}>
      <div className={styles.iframeContainer}>
        <iframe
          title="trailer"
          id="youtubeplayer"
          src="https://www.youtube.com/embed/RRqUhaG_E9s?rel=0&controls=1&showinfo=0modestbranding=1"
          width="100%"
          height="360"
          frameBorder="0"
          allowFullScreen="allowFullScreen"
          className={styles.video}
        />
      </div>
    </div>

    <div className={`${styles.synopsis} ${globalStyles.speksi2019plain}`}>
      <p>Mystisessä Kiinassa vallitsee kurjuus ja epätoivo.
        Raakalaismaiset barbaarit kylvävät tuhoa kaikkialle minne menevät.
         Kovia kokenut, mutta päättäväinen nuorukainen Kim Mo on saanut
         barbaareista ja Kiinan kurjuudesta tarpeekseen. Kim Mo uskoo voivansa
         tuhota barbaarit ja pelastaa Kiinan löytämällä kauan kadoksissa olleet
         legendaariset lohikäärmesisarukset. Näillä Kung Fu -mestareilla
         kerrotaan olevan mystisiä taikavoimia. Riittääkö yhden nuorukaisen
         päättäväisyys korjaamaan menneisyyden virheet?
      </p>
    </div>
  </div>
);

Teaser.propTypes = {
  globalStyles: PropTypes.any,
};

export default Teaser;


  <iframe width="1905" height="896" src="https://www.youtube.com/embed/RRqUhaG_E9s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
