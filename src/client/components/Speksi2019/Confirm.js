import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Confirm.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';

class Confirm extends Component {
  render() {
    const {
      booking, selectedShow, prevState, submitBooking,
    } = this.props;


    return (
      <div className={styles.container}>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Etunimi</p>
          <p className={`${styles.infoInput}`}>Nipa</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Sukunimi</p>
          <p className={`${styles.infoInput}`}>Nänni</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Sähköposti</p>
          <p className={`${styles.infoInput}`}>nipa@nän.ni</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Puhelinnumero</p>
          <p className={`${styles.infoInput}`}>0700123123</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Normaali (16 €)</p>
          <p className={`${styles.infoInput}`}>3</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Alennus (14 €)</p>
          <p className={`${styles.infoInput}`}>0</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Lisätietoja</p>
          <p className={`${styles.infoInput}`}>Olen homonaama.</p>
        </div>
        <div className={styles.infoGroup}>
          <p className={`${styles.infoLabel}`}>Hinta yhteensä</p>
          <p className={`${styles.infoInput}`}> 48 €</p>
        </div>

        <div className={pagestyles.buttonContainer}>
          <button type="button" onClick={prevState} className={`${pagestyles.buttonNext}`}>Edellinen</button>
          <button type="button" onClick={() => submitBooking(booking)} className={`${pagestyles.buttonNext}`}>Siirry maksamaan</button>
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
