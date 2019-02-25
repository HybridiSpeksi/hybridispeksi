import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderTextarea } from './RenderForm';
import styles from './ContactInfo.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';

const required = value => (value ? undefined : 'Pakollinen kenttä');
const maxLength = max => value => (value && value > max ? `Korkeintaan ${max} merkkiä` : undefined);
const maxLength15 = maxLength(15);
const number = value => (value && isNaN(Number(value)) ? 'Arvon oltava luku' : undefined);
const minValue = min => value => (value && value < min ? 'Arvon oltava positiivinen' : undefined);
const maxValue = max => value => (value && value > max ? 'Arvo on liian suuri' : undefined);
const minValue0 = minValue(0);
const maxValue10 = maxValue(10);
const pnumber = value =>
  (value && !/^\+[1-9]{1}[0-9]{3,14}$/i.test(value) ? 'Virheellinen puhelinnumero' : undefined);
const email = value =>
  (value && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value) ?
    'Virheellinen sähköposti' : undefined);

const Fields = () => (
  <div className={styles.column}>
    <h2>Yhteystiedot</h2>
    <div className={styles.content}>
      <Field
        name="ContactInfo.fname"
        id="fnameInput"
        component={RenderTextfield}
        type="text"
        label="Etunimi"
        placeholder="Etunimi"
        validate={[required, maxLength15]}
      />
      <Field
        name="ContactInfo.lname"
        id="lnameInput"
        component={RenderTextfield}
        type="text"
        label="Sukunimi"
        placeholder="Sukunimi"
        validate={[required, maxLength15]}
      />
      <Field
        name="ContactInfo.email"
        id="emailInput"
        component={RenderTextfield}
        type="text"
        label="Sähköposti"
        placeholder="Sähköposti"
        validate={[required, email]}
      />
      <Field
        name="ContactInfo.pnumber"
        id="pnumberInput"
        component={RenderTextfield}
        type="text"
        label="Puhelinnumero"
        placeholder="Puhelinnumero"
        validate={[required]}
      />
    </div>
  </div>
);

const Tickets = ({ formState, prices }) => {
  const { normalPrice, discountPrice } = prices;
  const countPrice = () => {
    if (!formState) return 0;
    const {
      normalCount, discountCount, specialPriceCount, specialPrice,
    } = formState;
    return Number(normalCount) * Number(normalPrice) + Number(discountCount) * Number(discountPrice) + Number(specialPriceCount) * Number(specialPrice);
  };
  return (
    <div className={styles.column}>
      <h2>Liput</h2>
      <div className={styles.content}>
        <Field
          name="normalCount"
          id="nCountInput"
          component={RenderNumber}
          type="number"
          label={`Normaali (${normalPrice} €)`}
          validate={[number, minValue0, maxValue10]}
        />
        <Field
          name="discountCount"
          id="dCountInput"
          component={RenderNumber}
          type="number"
          label={`Alennus (${discountPrice} €)`}
          validate={[number, minValue0, maxValue10]}
        />
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
  selectedShow, formState, prices, prevState, nextState, showPage, handleSubmit, selectBooking, invalid,
}) => {
  const onSubmit = (values) => {
    values.showId = selectedShow.id;
    selectBooking(values);
  };

  return (
    <div className={`${styles.container} ${!showPage ? pagestyles.hidden : ''}`}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.column}>
          <h2>Valittu näytös</h2>
          <div className={styles.content}>
            <h3>{selectedShow.nameLong}</h3>
          </div>
        </div>

        <Fields />

        <Tickets selectedShow={selectedShow} formState={formState} prices={prices} />
        <div className={pagestyles.buttonContainer}>
          <button type="button" onClick={prevState} className={`${pagestyles.buttonNext}`}>Edellinen</button>
          <button type="submit" onClick={nextState} className={`${pagestyles.buttonNext} ${invalid ? pagestyles.disabled : ''}`} disabled={invalid}>Seuraava</button>
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
  invalid: PropTypes.bool,
};

const mapStateToProps = state => ({
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
  initialValues: state.bookingManagement.selectedBooking,
  formState: getFormValues('publicBookingForm')(state),
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
