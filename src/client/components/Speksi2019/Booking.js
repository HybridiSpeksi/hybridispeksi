import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderDateField, RenderTextarea } from './RenderForm';
import styles from './Booking.css';
import * as actions from 'actions/bookingActions';

const ContactInfo = () => (
  <div className={styles.column}>
    <h2>Yhteystiedot</h2>
    <div className={styles.content}>
      <Field name="ContactInfo.fname" id="fnameInput" component={RenderTextfield} type="text" label="Etunimi" placeholder="Etunimi" />
      <Field name="ContactInfo.lname" id="lnameInput" component={RenderTextfield} type="text" label="Sukunimi" placeholder="Sukunimi" />
      <Field name="ContactInfo.email" id="emailInput" component={RenderTextfield} type="text" label="Sähköposti" placeholder="Sähköposti" />
      <Field name="ContactInfo.pnumber" id="pnumberInput" component={RenderTextfield} type="text" label="Puhelinnumero" placeholder="Puhelinnumero" />
    </div>
  </div>
);

const Tickets = ({ selectedShow, formState, prices }) => {
  const countPrice = () => {
    if (!formState) return 0;
    const {
      normalCount, discountCount, specialPriceCount, specialPrice,
    } = formState;
    const { normalPrice, discountPrice } = prices;
    return Number(normalCount) * Number(normalPrice) + Number(discountCount) * Number(discountPrice) + Number(specialPriceCount) * Number(specialPrice);
  };
  return (
    <div className={styles.column}>
      <h2>Liput</h2>
      <div className={styles.content}>
        <Field name="normalCount" id="nCountInput" component={RenderNumber} type="number" label="Normaali (16 €)" />
        <Field name="discountCount" id="dCountInput" component={RenderNumber} type="number" label="Alennus (14 €)" />
        <div className={styles.price}>
          <span>Hinta yhteensä {countPrice()} €</span>
        </div>
        <Field name="additionalInfo" id="additionalArea" component={RenderTextarea} type="text" label="Lisätietoja" placeholder="Lisätietoja" rows="5" />
      </div>
    </div>
  );
};

Tickets.propTypes = {
  selectedShow: PropTypes.object,
  formState: PropTypes.object,
};

class Booking extends Component {
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

          <ContactInfo />

          <Tickets selectedShow={selectedShow} formState={formState} prices={prices} />

        </form>
      </div>
    );
  }
}

Booking.propTypes = {
  booking: PropTypes.object,
  selectedShow: PropTypes.object,
  shows: PropTypes.array,
  prices: PropTypes.array,
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
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
})(Booking);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
