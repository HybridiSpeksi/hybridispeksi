import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BookingConfirmation.css';
import pagestyles from './Speksi2019.css';
import PageHero from '../PageHero/PageHero';
import * as actions from 'actions/bookingActions';

class BookingConfirmation extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

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
      <div className={`${styles.container}`}>
        <div className={styles.pageHero}>
          <PageHero title="Lipun ostaminen onnistui!" subTitle="Tervetuloa katsomaan HybridiSpeksiä 2019!" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.column}>
            <h2>Varauksesi tiedot</h2>
          </div>
          <div className={styles.column}>
            <h3>Valittu näytös</h3>
            <div className={styles.content}>
              <h3>{selectedShow.nameLong}</h3>
            </div>
          </div>
          <div className={styles.column}>
            <h3>Yhteystiedot</h3>
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
            <h3>Liput</h3>
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
          </div>
        </div>
        <div className={styles.instructionsContainer}>
          <div className={styles.instructions}>
            <h2>Ohjeita jatkoon</h2>
            <div className={styles.instructionsList}>
              <ol>
                <li>Tarkista varauksesi tiedot.</li>
                <li>Sait sähköpostiisi varausnumeron, jota näyttämällä
                 pääset HybridiSpeksi 2018 -näytökseen.
                </li>
                <li>Jos sinulla on kysyttävää tai tiedoissasi oli virhe,
                 ota yhteyttä lipunmyynti@hybridispeksi.fi.
                </li>
                <li>Nähdään teatterilla!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookingConfirmation.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirmation);
