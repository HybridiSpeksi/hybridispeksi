import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BookingInfo.css';
import * as actions from 'actions/bookingActions';

const BookingInfo = ({ booking, clearSelectedBooking, redeem }) => {
  if (booking.id === '') {
    return (
      <div className={styles.container}>
        <div className={styles.buttonRow}>
          <Link className={styles.button} to="varaus">Uusi varaus</Link>
        </div>
      </div>
    );
  }
  const {
    fname, lname, email, pnumber,
  } = booking.ContactInfo;
  const {
    normalCount, discountCount, specialPriceCount, specialPrice, additionalInfo, paid, redeemed,
  } = booking;

  return (
    <div className={styles.container}>
      <h2>Varauksen tiedot</h2>
      <div className={styles.infoRow}>
        <span>{fname} {lname}</span>
      </div>
      <div className={styles.infoRow}>
        <span>{email}</span>
        <span>{pnumber}</span>
      </div>
      <div className={styles.infoRow}>
        <span>Normaalihintaiset liput: {normalCount}</span>
        <span>Alennushintaiset liput: {discountCount}</span>
        {specialPriceCount > 0
        ?
          <span>Erikoishintaiset liput: {specialPriceCount}, hinta {specialPrice} </span>
        : null}
      </div>
      <div className={styles.infoRow}>
        {additionalInfo}
      </div>
      <div className={styles.infoRow}>
        <span>Yhteensä {normalCount + discountCount + specialPriceCount} kpl</span>
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.button} onClick={clearSelectedBooking}>Tyhjennä valinta</button>
        <Link className={styles.button} to="/varaus">Muokkaa tai poista</Link>
      </div>
      <div className={styles.buttonRow}>
        {!booking.redeemed ? <button type="button" className={styles.button} onClick={() => redeem(booking)}>Lunasta liput</button> : 'Lippu lunastettu.'}
      </div>
    </div>
  );
};

BookingInfo.propTypes = {
  booking: PropTypes.object,
  clearSelectedBooking: PropTypes.func,
  redeem: PropTypes.func,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
});

const mapDispatchToProps = dispatch => ({
  clearSelectedBooking: () => dispatch(actions.clearSelectedBooking()),
  redeem: booking => dispatch(actions.redeem(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);
