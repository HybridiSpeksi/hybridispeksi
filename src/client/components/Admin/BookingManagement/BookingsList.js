import React from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './BookingsList.css';
import * as actions from 'actions/bookingActions';

const Booking = ({ booking, handleClick, selected }) => {
  const {
    fname, lname, email,
  } = booking.ContactInfo;
  const { paid, redeemed, tag } = booking;
  const countBookings = (_booking) => {
    const { normalCount, discountCount, specialPriceCount } = _booking;
    return normalCount + discountCount + specialPriceCount;
  };
  return (
    <button className={`${styles.bookingRow} ${selected ? styles.selected : ''}`} onClick={() => handleClick(booking)}>
      <span className={styles.name}>{fname} {lname}</span>
      <span className={styles.email}>{email}</span>
      <span className={styles.paid}>{paid ? <i className="fa fa-check" /> : ''}</span>
      <span className={styles.redeemed}>{redeemed ? <i className="fa fa-check" /> : ''}</span>
      <span className={styles.tag}>{tag}</span>
      <span className={styles.bookingCount}>{countBookings(booking)}</span>
    </button>
  );
};

Booking.propTypes = {
  booking: PropTypes.object,
  handleClick: PropTypes.func,
  selected: PropTypes.bool,
};

const BookingsList = ({ bookings, selectBooking, selectedBooking }) => {
  const handleClick = (booking) => {
    selectBooking(booking);
  };
  if (!bookings) {
    return null;
  }
  return (
    <div className={styles.container}>
      <h2>Varaukset</h2>
      <div className={styles.rows}>
        <div className={styles.bookingRow}>
          <span className={styles.name}>Nimi</span>
          <span className={styles.email}>Sähköposti</span>
          <span className={styles.paid}>Maksettu</span>
          <span className={styles.redeemed}>Lunastettu</span>
          <span className={styles.tag}>Tunnus</span>
          <span className={styles.bookingCount}>Liput</span>
        </div>
        {bookings.map((booking) => {
        return <Booking key={cuid()} booking={booking} handleClick={handleClick} selected={booking.id === selectedBooking.id} />;
      })
      }
      </div>
    </div>
  );
};

BookingsList.propTypes = {
  bookings: PropTypes.array,
  selectBooking: PropTypes.func,
  selectedBooking: PropTypes.object,
};

const mapStateToProps = state => ({
  bookings: state.bookingManagement.bookings,
  selectedBooking: state.bookingManagement.selectedBooking,
});

const mapDispatchToProps = dispatch => ({
  selectBooking: booking => dispatch(actions.selectBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);
