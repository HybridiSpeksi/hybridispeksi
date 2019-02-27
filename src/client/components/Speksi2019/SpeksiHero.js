import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './SpeksiHero.css';

const Instructions = () => (
  <div className={styles.instructionsContent}>
    <h3>Toimi näin</h3>
    <ol className={`${styles.instructions_list}`}>
      <li>Valitse haluamasi näytös</li>
      <li>Täytä tietosi</li>
      <li>Tarkista, että täyttämäsi tiedot ovat oikein</li>
      <li>Sinut ohjataan Paytrailin maksupalveluun</li>
    </ol>
  </div>
);

const Hero = ({ ticketSaleMessage, ticketSaleOpen }) => (
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
        <h4 className={styles.ticketSaleMessage}><i>{ticketSaleMessage}</i></h4>
        {ticketSaleOpen ? <Instructions /> : null}
        <p>Lippuhinnat 16 € / 14 € opiskelija /12 € ryhmä. Kannatuslippu 25 €.</p>
        <p>Ryhmävaraukset (väh. 8 hlö) sekä ongelmatilanteen sattuessa ota yhteyttä sähköpostilla lipunmyynti@hybridispeksi.fi.</p>

        <p>Näytöksen kesto on noin 2,5 h, johon sisältyy 20 min puoliaika. Näytökset Manilla-teatterilla osoitteessa Itäinen Rantakatu 64b, 20810 Turku</p>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  ticketSaleMessage: PropTypes.string,
  ticketSaleOpen: PropTypes.bool,
};


const mapStateToProps = state => ({
  ticketSaleMessage: state.bookingManagement.ticketSaleMessage,
  ticketSaleOpen: state.bookingManagement.ticketSaleOpen,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
