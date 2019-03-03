import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderTextarea, RenderRadio, RenderCheckbox } from './RenderForm';
import styles from './EnrollmentInfo.css';
import pagestyles from './Event.css';
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

const Fields = () => {
  return (
    <div className={pagestyles.column}>
      <h2>Yhteystiedot</h2>
      <div className={pagestyles.content}>
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
          component={RenderTextarea}
          rows="1"
          type="text"
          label="Sähköposti"
          placeholder="Sähköposti"
          validate={[required, email]}
        />
        <Field
          name="presentGreeting"
          id="greetingsInput"
          component={RenderCheckbox}
          type="checkbox"
          label="Esitätkö tervehdyksen"
          validate={[required]}
        />
        <Field
          name="greetingOrganization"
          id="greetingsHolderInput"
          component={RenderTextarea}
          rows="1"
          type="text"
          label="Edustettava taho tervehdyksessä"
          placeholder="Edustettava taho tervehdyksessä"
        />
        <Field
          name="avec"
          id="avecInput"
          component={RenderTextfield}
          type="text"
          label="Avec"
          placeholder="Avec"
        />
        <Field
          name="partyExpectation"
          id="tableGroupWishInput"
          component={RenderTextfield}
          type="text"
          label="Pöytäseuruetoive"
          placeholder="Pöytäseuruetoive"
        />
        <Field
          name="menu"
          id="menuInput"
          component={RenderRadio}
          type="radio"
          label="Menu"
          buttons={['Menu 1', 'Menu 2']}
          validate={[required]}
        />
        <Field
          name="diet"
          id="allergiesInput"
          component={RenderTextfield}
          type="text"
          label="Allergiat ja erityisruokavaliot"
          placeholder="Allergiat ja erityisruokavaliot"
        />
        <Field
          name="alcohol"
          id="drinkMenuInput"
          component={RenderCheckbox}
          type="checkbox"
          label="Alkoholillinen juomamenu"
          validate={[required]}
        />
        <Field
          name="sillis"
          id="sillisInput"
          component={RenderCheckbox}
          type="checkbox"
          label="Osallistun silliaamiaiselle (Hinta 5 €)"
          validate={[required]}
        />
        <Field
          name="memberOfSpeksi"
          id="memberInput"
          component={RenderCheckbox}
          type="checkbox"
          label="Olen HybridiSpeksi ry:n jäsen"
          validate={[required]}
        />
        <div className={styles.submitEnrollContainer}>
          <button type="button" onClick={() => submitEnroll(enroll)} className={`${styles.enrollButton}`}>Ilmoittaudu</button>
        </div>
      </div>
    </div>
  );
};

const ContactInfoForm = ({
  handleSubmit, invalid,
}) => {
  const onSubmit = (values) => {
    values.showId = selectedShow.id;
    selectBooking(values);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Fields />
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
