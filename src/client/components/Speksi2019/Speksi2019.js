import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeroFullViewport from '../HeroFullViewport/HeroFullViewport';
import styles from './Speksi2019.css';

class Speksi2019 extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    const globalStyles = this.props.globalStyles;
    return (
      <HeroFullViewport backgroundImage="/assets/images/speksi2019bg.png">
        <div className={styles.headerContainer}>
          <h1 className={globalStyles.bigHeading + ' ' + styles.bigsubHeading}>Hybridispeksi 2019</h1>
          <h1 className={globalStyles.bigHeading + ' ' + styles.bigHeading}>Viimeinen lohikäärmeisku</h1>
          <div className={styles.headingText}>
            <p className={globalStyles.headingText}>
                Mystisessä Kiinassa vallitsee kurjuus ja epätoivo. Raakalaismaiset barbaarit
                kylvävät tuhoa kaikkialle minne menevät. Kovia kokenut, mutta päättäväinen
                nuorukainen Kim Mo on saanut barbaareista ja Kiinan kurjuudesta tarpeekseen.
                Kim Mo uskoo voivansa tuhota barbaarit ja pelastaa Kiinan löytämällä kauan
                kadoksissa olleet legendaariset lohikäärmesisarukset. Näillä Kung Fu -mestareilla
                kerrotaan olevan mystisiä taikavoimia. Riittääkö yhden nuorukaisen päättäväisyys
                korjaamaan menneisyyden virheet?
            </p>
          </div>
          <p className={globalStyles.subHeading + ' ' + styles.subHeading}>
              Ensi-ilta 27.3.<br />
              @Manilla
          </p>
        </div>
      </HeroFullViewport>
    );
  }
}

Speksi2019.propTypes = {
  globalStyles: PropTypes.object,
};

export default Speksi2019;
