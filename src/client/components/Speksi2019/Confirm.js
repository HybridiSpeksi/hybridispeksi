import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RenderInfoField } from './RenderForm';
import styles from './ContactInfo.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';
import { submitBooking } from '../../actions/bookingActions';


const BookingInfo = () => (
  <div className={styles.column}>
    <h2>Yhteystiedot</h2>
    <div className={styles.content}>
      <div className={styles.priceInfo}>
        <span>Hinta yhteensä  €</span>
      </div>
    </div>
  </div>
);

class Confirm extends Component {
  render() {
    const {
      booking, selectedShow, prevState, submitBooking,
    } = this.props;


    return (
      <div className={styles.container}>

        {/* <BookingInfo /> */}
        <button type="button" onClick={prevState} className={`${pagestyles.buttonNext}`}>Edellinen</button>
        <button type="button" onClick={() => submitBooking(booking)} className={`${pagestyles.buttonNext}`}>Siirry maksamaan</button>
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
