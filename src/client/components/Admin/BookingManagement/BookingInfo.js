import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BookingInfo.css';

const BookingInfo = ({ booking }) => {
  if (booking.id === '') {
    return (
      <div className={styles.container}>
        <div className={styles.buttonRow}>
          <button>Uusi varaus</button>
        </div>
      </div>
    );
  }
  const {
    fname, lname, email, pnumber,
  } = booking.ContactInfo;
  const { normalCount, discountCount, specialPriceCount } = booking;

  const clearSelection = () => {
    console.log('clear');
  };
  const redeem = () => {
    console.log('redeem');
  };
  return (
    <div className={styles.container}>
      <h1>BookingInfo</h1>
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
        <span>Erikoishintaiset liput: {specialPriceCount}</span>
      </div>
      <div className={styles.infoRow}>
        <span>Yhteensä {normalCount + discountCount + specialPriceCount} kpl</span>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={redeem} disabled>Lunasta</button>
        <button onClick={clearSelection}>Tyhjennä valinta</button>
        <Link to="/varaus"><button>Muokkaa tietoja</button></Link>
      </div>
    </div>
  );
};

BookingInfo.propTypes = {
  booking: PropTypes.object,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);
