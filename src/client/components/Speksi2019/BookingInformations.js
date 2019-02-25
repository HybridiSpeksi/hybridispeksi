import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderDateField, RenderTextarea, RenderInfoField } from './RenderForm';
import styles from './ContactInfo.css';
import * as actions from 'actions/bookingActions';


const BookingInfo = () => (
  <div className={styles.column}>
    <h2>Yhteystiedot</h2>
    <div className={styles.content}>
      <Field name="ContactInfo.fname" id="fnameInfo" component={RenderInfoField} type="text" label="Etunimi" />
      <Field name="ContactInfo.lname" id="lnameInfo" component={RenderInfoField} type="text" label="Sukunimi" />
      <Field name="ContactInfo.email" id="emailInfo" component={RenderInfoField} type="text" label="Sähköposti" />
      <Field name="ContactInfo.pnumber" id="pnumberInfo" component={RenderInfoField} type="text" label="Puhelinnumero" />
      <Field name="normalCount" id="nCountInfo" component={RenderInfoField} type="number" label="Normaali (16 €)" />
      <Field name="discountCount" id="dCountInfo" component={RenderInfoField} type="number" label="Alennus (14 €)" />
      <Field name="additionalInfo" id="additionalArea" component={RenderInfoField} type="text" label="Lisätietoja " />
      <div className={styles.priceInfo}>
        <span>Hinta yhteensä  €</span>
      </div>
    </div>
  </div>
);

class BookingInformations extends Component {
  render() {
    const {
      booking, selectedShow, handleSubmit, createBooking, formState, prices,
    } = this.props;
    const onSubmit = (values) => {
      values.showId = selectedShow.id;
      if (booking.id === '') {
        values.paymentMethodCode = 100;
        values.paid = true;
        createBooking(values);
      } else {
        updateBooking(values);
      }
    };

    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.column}>
            <h3>Valittu näytös: {selectedShow.nameLong}</h3>
          </div>
          <BookingInfo />
        </form>
      </div>
    );
  }
}

BookingInformations.propTypes = {
  booking: PropTypes.object,
  selectedShow: PropTypes.object,
  shows: PropTypes.array,
  fetchShows: PropTypes.func,
  createBooking: PropTypes.func,
  handleSubmit: PropTypes.func,
  formState: PropTypes.object,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
  initialValues: state.bookingManagement.selectedBooking,
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
  shows: state.bookingManagement.shows,
  formState: getFormValues('bookingForm')(state),
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
  createBooking: booking => dispatch(actions.createBooking(booking)),
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
})(BookingInformations);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
