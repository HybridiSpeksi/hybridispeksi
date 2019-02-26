import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Confirm.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';

class Confirm extends Component {
  render() {
    const {
      booking, selectedShow, prevState, submitBooking, showPage, prices,
    } = this.props;

    const { normalPrice, discountPrice } = prices;
    const countPrice = () => {
      const {
        normalCount, discountCount, specialPriceCount, specialPrice,
      } = booking;
      return Number(normalCount) * Number(normalPrice) + Number(discountCount) * Number(discountPrice) + Number(specialPriceCount) * Number(specialPrice);
    };
    return (
      <div className={`${styles.container} ${!showPage ? pagestyles.hidden : ''}`}>
        <div className={styles.column}>
          <h2>Valittu näytös</h2>
          <div className={styles.content}>
            <h3>{selectedShow.nameLong}</h3>
          </div>
        </div>
        <div className={styles.column}>
          <h2>Yhteystiedot</h2>
          <div className={styles.content}>
            <div className={styles.infoGroup}>
              <p className={styles.infoLabel}>Etunimi</p>
              <p className={`${styles.infoInput}`}>{booking.ContactInfo.fname}</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={`${styles.infoLabel}`}>Sukunimi</p>
              <p className={`${styles.infoInput}`}>{booking.ContactInfo.lname}</p>
            </div>
            <div className={`${styles.infoGroup} ${styles.infoEmail}`}>
              <p className={`${styles.infoLabel}`}>Sähköposti</p>
              <p className={`${styles.infoInput}`}>{booking.ContactInfo.email}</p>
            </div>
            <div className={`${styles.infoGroup} ${styles.infoPnumber}`}>
              <p className={`${styles.infoLabel}`}>Puhelinnumero</p>
              <p className={`${styles.infoInput}`}>{booking.ContactInfo.pnumber}</p>
            </div>
          </div>
          <h2>Liput</h2>
          <div className={styles.content}>
            <div className={styles.infoGroup}>
              <p className={`${styles.infoLabel}`}>Normaali (16 €)</p>
              <p className={`${styles.infoInput}`}>{booking.normalCount} kpl</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={`${styles.infoLabel}`}>Alennus (14 €)</p>
              <p className={`${styles.infoInput}`}>{booking.discountCount} kpl</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={`${styles.infoLabel}`}>Hinta yhteensä</p>
              <p className={`${styles.infoInput}`}>{countPrice()} €</p>
            </div>
            <div className={`${styles.infoGroup} ${styles.infoArea}`}>
              <p className={`${styles.infoLabel}`}>Lisätietoja</p>
              <p className={`${styles.infoInput}`}>{booking.additionalInfo}</p>
            </div>
          </div>
          <div className={pagestyles.buttonContainer}>
            <button type="button" onClick={prevState} className={`${pagestyles.buttonNext}`}>Edellinen</button>
            <button type="button" onClick={() => submitBooking(booking)} className={`${pagestyles.buttonNext}`}>Siirry maksamaan</button>
          </div>
          <div className={styles.paytrailInfo}>
            <p>
              Maksunvälityspalvelun toteuttajana ja maksupalveluntarjoajana toimii Paytrail Oyj
              (2122839-7) yhteistyössä suomalaisten pankkien ja luottolaitosten kanssa. Paytrail Oyj
              näkyy maksun saajana tiliotteella tai korttilaskulla ja välittää maksun kauppiaalle.
              Paytrail Oyj:llä on maksulaitoksen toimilupa. Reklamaatiotapauksissa pyydämme ottamaan
              ensisijaisesti yhteyttä tuotteen toimittajaan.
            </p>

            <p>
              Paytrail Oyj, y-tunnus: 2122839-7<br />
              Innova 2<br />
              Lutakonaukio 7<br />
              40100 Jyväskylä<br />
              Puhelin: 0207 181830<br />
              www.paytrail.com
            </p>

            <h4>Verkkopankit</h4>
            <p>
              Verkkopankkimaksamiseen liittyvän maksunvälityspalvelun toteuttaa Paytrail Oyj
              (2122839-7) yhteistyössä suomalaisten pankkien ja luottolaitosten kanssa. Käyttäjän
              kannalta palvelu toimii aivan kuten perinteinen verkkomaksaminenkin.
            </p>
          </div>
        </div>
      </div>


    );
  }
}

Confirm.propTypes = {
  booking: PropTypes.object,
  selectedShow: PropTypes.object,
  prevState: PropTypes.func,
  submitBooking: PropTypes.func,
  showPage: PropTypes.bool,
  prices: PropTypes.object,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
});

const mapDispatchToProps = dispatch => ({
  submitBooking: booking => dispatch(actions.submitBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
