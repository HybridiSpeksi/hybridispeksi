import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Confirm.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';

class Confirm extends Component {
  render() {
    const {
      booking, selectedShow, prevState, submitBooking, showPage,
    } = this.props;

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
              <p className={`${styles.infoInput}`}>{booking.ContactInfo.price} €</p>
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
