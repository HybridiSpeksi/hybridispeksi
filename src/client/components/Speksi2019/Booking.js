import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderTextarea } from './RenderForm';
import styles from './Booking.css';
<<<<<<< HEAD
import pagestyles from './Speksi2019.css';
=======
>>>>>>> 3a46797fe0e56e2f9e642e11ef8b9c64465fa22b
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

const Tickets = ({ formState, prices }) => {
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
  formState: PropTypes.object,
  prices: PropTypes.object,
};

class Booking extends Component {
  render() {
    const {
      selectedShow, handleSubmit, formState, prices, prevState, nextState, selectBooking,
    } = this.props;
    const onSubmit = (values) => {
      selectBooking(values);
    };

    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.column}>
            <h3>Valittu näytös: {selectedShow.nameLong}</h3>
          </div>

          <ContactInfo />

          <Tickets selectedShow={selectedShow} formState={formState} prices={prices} />

          <button type="button" onClick={prevState} className={`${pagestyles.buttonNext}`}>Edellinen</button>
          <button type="submit" onClick={nextState} className={`${pagestyles.buttonNext}`}>Seuraava</button>
        </form>
      </div>
    );
  }
}

Booking.propTypes = {
  selectedShow: PropTypes.object,
  prices: PropTypes.object,
  handleSubmit: PropTypes.func,
  formState: PropTypes.object,
  prevState: PropTypes.func,
  nextState: PropTypes.func,
  selectBooking: PropTypes.func,
};

const mapStateToProps = state => ({
  initialValues: state.bookingManagement.selectedBooking,
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
<<<<<<< HEAD
  createBooking: booking => dispatch(actions.createBooking(booking)),
  selectBooking: booking => dispatch(actions.selectBooking(booking)),
=======
>>>>>>> 3a46797fe0e56e2f9e642e11ef8b9c64465fa22b
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
})(Booking);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
