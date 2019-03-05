import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderTextarea } from './RenderForm';
import styles from './FeedbackInfo.css';
import pagestyles from './Feedback.css';
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

const Fields = ({ invalid }) => {
  return (
    <div className={pagestyles.column}>
      <h2>Yhteystiedot</h2>
      <div className={pagestyles.content}>
        <Field
          name="fname"
          id="fnameInput"
          component={RenderTextfield}
          type="text"
          label="Etunimi"
          placeholder="Etunimi"
        />
        <Field
          name="lname"
          id="lnameInput"
          component={RenderTextfield}
          type="text"
          label="Sukunimi"
          placeholder="Sukunimi"
        />
        <Field
          name="email"
          id="emailInput"
          component={RenderTextarea}
          rows="1"
          type="text"
          label="Sähköposti"
          placeholder="Sähköposti"
          validate={[email]}
        />
        <Field
          name="feedback"
          id="feedbackInput"
          component={RenderTextarea}
          rows="5"
          type="textarea"
          label="Palaute"
          placeholder="Palaute"
          validate={[required]}
        />
        <div className={styles.submitFeedbackContainer}>
          <button type="submit" disabled={invalid} className={`${styles.feedbackButton} ${invalid ? styles.disabled : ''}`}>Lähetä palaute</button>
        </div>
      </div>
    </div>
  );
};

const ContactInfoForm = ({
  handleSubmit, invalid, submitEnrollment, event, submitted,
}) => {
  const onSubmit = (values) => {
    values.eventId = event.id;
    submitEnrollment(values);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {!submitted ? <Fields invalid={invalid} /> : ''}
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