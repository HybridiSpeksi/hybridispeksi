import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderTextarea, RenderCheckbox, RenderDropdown } from './RenderForm';
import styles from './EnrollmentInfo.css';
import pagestyles from './Event.css';
import * as actions from 'actions/eventActions';

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

const Fields = ({ invalid, event }) => {
  const drinkMenuOptions = () => {
    return (
      [{ name: 'Alkoholillinen', value: true },
        { name: 'Alkoholiton', value: false }]
    );
  };
  const menuOptions = () => {
    return (
      [{ name: 'Menu 1 (Liha)', value: 'Liha' },
        { name: 'Menu 2 (Kasvis)', value: 'Kasvis' }]
    );
  };

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
          label="Esitän tervehdyksen"
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
          component={RenderDropdown}
          type="dropdown"
          label="Menu"
          options={menuOptions()}
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
          component={RenderDropdown}
          type="drowdown"
          label="Juomamenu"
          options={drinkMenuOptions()}
        />
        <Field
          name="sillis"
          id="sillisInput"
          component={RenderCheckbox}
          type="checkbox"
          label="Osallistun silliaamiaiselle (Hinta 5 €)"
        />
        <Field
          name="memberOfSpeksi"
          id="memberInput"
          component={RenderCheckbox}
          type="checkbox"
          label="Olen HybridiSpeksi ry:n jäsen"
        />
        <div className={styles.submitEnrollContainer}>
          {event.registrationOpen ?
            <button type="submit" disabled={invalid} className={`${styles.enrollButton} ${invalid ? styles.disabled : ''}`}>Ilmoittaudu</button>
          :
          'Tapahtuman ilmoittautuminen on suljettu.'}
        </div>
      </div>
    </div>
  );
};

Fields.propTypes = {
  invalid: PropTypes.bool,
  event: PropTypes.object,
};

const ContactInfoForm = ({
  handleSubmit, invalid, submitEnrollment, event, submitted,
}) => {
  const onSubmit = (values) => {
    values.eventId = event.id;
    submitEnrollment(values);
    console.log(submitted);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {!submitted ? <Fields invalid={invalid} event={event} /> : ''}
      </form>
    </div>
  );
};

ContactInfoForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitEnrollment: PropTypes.func,
  event: PropTypes.object,
  submitted: PropTypes.bool,
};

const mapStateToProps = state => ({
  event: state.event.event,
  formState: getFormValues('publicBookingForm')(state),
  initialValues: state.event.enrollment,
  submitted: state.event.submitted,
});

const mapDispatchToProps = dispatch => ({
  submitEnrollment: enrollment => dispatch(actions.submitEnrollment(enrollment)),
});

const ContactInfoWithForm = reduxForm({
  form: 'enrollmentForm',
})(ContactInfoForm);

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoWithForm);
