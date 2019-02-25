import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderTextarea } from './RenderForm';
import styles from './ContactInfo.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';

const Fields = () => (
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

const ContactInfoForm = ({
  selectedShow, formState, prices, prevState, nextState, showPage, handleSubmit, selectBooking,
}) => {
  const onSubmit = (values) => {
    values.showId = selectedShow.id;
    selectBooking(values);
  };
  return (
    <div className={`${styles.container} ${!showPage ? pagestyles.hidden : ''}`}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.column}>
          <h3>Valittu näytös: {selectedShow.nameLong}</h3>
        </div>

        <Fields />

        <Tickets selectedShow={selectedShow} formState={formState} prices={prices} />
        <div className={pagestyles.buttonContainer}>
          <button type="button" onClick={prevState} className={`${pagestyles.buttonNext}`}>Edellinen</button>
          <button type="submit" onClick={nextState} className={`${pagestyles.buttonNext}`}>Seuraava</button>
        </div>
      </form>
    </div>
  );
};


ContactInfoForm.propTypes = {
  selectedShow: PropTypes.object,
  prices: PropTypes.object,
  formState: PropTypes.object,
  prevState: PropTypes.func,
  nextState: PropTypes.func,
  showPage: PropTypes.bool,
  handleSubmit: PropTypes.func,
  selectBooking: PropTypes.func,
};

const mapStateToProps = state => ({
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
  initialValues: state.bookingManagement.selectedBooking,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
  createBooking: booking => dispatch(actions.createBooking(booking)),
  selectBooking: booking => dispatch(actions.selectBooking(booking)),
});

const ContactInfoWithForm = reduxForm({
  form: 'publicBookingForm',
})(ContactInfoForm);

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoWithForm);
