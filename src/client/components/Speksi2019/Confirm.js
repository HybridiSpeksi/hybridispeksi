import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactInfo.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';

class Confirm extends Component {
  render() {
    const {
      booking, selectedShow, prevState, submitBooking, showPage,
    } = this.props;

    return (
      <div className={`${styles.container} ${!showPage ? pagestyles.hidden : ''}`}>

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
