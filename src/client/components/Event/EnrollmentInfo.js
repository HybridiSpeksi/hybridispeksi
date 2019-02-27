import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderTextarea, RenderRadio } from './RenderForm';
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
          name="EnrollmentInfo.fname"
          id="fnameInput"
          component={RenderTextfield}
          type="text"
          label="Etunimi"
          placeholder="Etunimi"
          validate={[required, maxLength15]}
        />
        <Field
          name="EnrollmentInfo.lname"
          id="lnameInput"
          component={RenderTextfield}
          type="text"
          label="Sukunimi"
          placeholder="Sukunimi"
          validate={[required, maxLength15]}
        />
        <Field
          name="EnrollmentInfo.email"
          id="emailInput"
          component={RenderTextarea}
          rows="1"
          type="text"
          label="Sähköposti"
          placeholder="Sähköposti"
          validate={[required, email]}
        />
        <Field
          name="EnrollmentInfo.greetings"
          id="greetingsInput"
          component={RenderRadio}
          type="radio"
          label="Esitätkö tervehdyksen"
          buttons={['kyllä', 'ei']}
          validate={[required]}
        />
        <Field
          name="EnrollmentInfo.greetingsHolder"
          id="greetingsHolderInput"
          component={RenderTextarea}
          rows="1"
          type="text"
          label="Edustettava taho tervehdyksessä"
          placeholder="Edustettava taho tervehdyksessä"
        />
        <Field
          name="EnrollmentInfo.avec"
          id="avecInput"
          component={RenderTextfield}
          type="text"
          label="Avec"
          placeholder="Avec"
        />
        <Field
          name="EnrollmentInfo.tableGroupWish"
          id="tableGroupWishInput"
          component={RenderTextfield}
          type="text"
          label="Pöytäseuruetoive"
          placeholder="Pöytäseuruetoive"
        />
        <Field
          name="EnrollmentInfo.menu"
          id="menuInput"
          component={RenderRadio}
          type="radio"
          label="Menu"
          buttons={['Menu 1', 'Menu 2']}
          validate={[required]}
        />
        <Field
          name="EnrollmentInfo.allergies"
          id="allergiesInput"
          component={RenderTextfield}
          type="text"
          label="Allergiat ja erityisruokavaliot"
          placeholder="Allergiat ja erityisruokavaliot"
        />
        <Field
          name="EnrollmentInfo.drinkMenu"
          id="drinkMenuInput"
          component={RenderRadio}
          type="radio"
          label="Juomamenu"
          buttons={['Alkoholillinen', 'Alkoholiton']}
          validate={[required]}
        />
        <Field
          name="EnrollmentInfo.sillis"
          id="sillisInput"
          component={RenderRadio}
          type="radio"
          label="Osallistun silliaamiaiselle (Hinta 5 €)"
          buttons={['kyllä', 'ei']}
          validate={[required]}
        />
        <Field
          name="EnrollmentInfo.member"
          id="memberInput"
          component={RenderRadio}
          type="radio"
          label="Olen HybridiSpeksi ry:n jäsen"
          buttons={['kyllä', 'ei']}
          validate={[required]}
        />
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
