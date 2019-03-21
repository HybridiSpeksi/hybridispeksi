import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions/feedbackActions';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderTextarea } from './RenderForm';
import styles from './FeedbackInfo.css';
import pagestyles from './Feedback.css';

const required = value => (value ? undefined : 'Pakollinen kenttä');
const email = value =>
  (value && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value) ?
    'Virheellinen sähköposti' : undefined);

const Fields = ({ invalid }) => {
  return (
    <div className={pagestyles.column}>
      <h2>Yhteystiedot</h2>
      <div className={pagestyles.content}>
        <Field
          name="name"
          id="nameInput"
          component={RenderTextfield}
          type="text"
          label="Nimi"
          placeholder="Nimi"
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

Fields.propTypes = {
  invalid: PropTypes.bool,
};

const FeedbackInfoForm = ({
  handleSubmit, invalid, submitted, submitFeedback,
}) => {
  const onSubmit = (values) => {
    submitFeedback(values);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {!submitted ? <Fields invalid={invalid} /> : ''}
      </form>
    </div>
  );
};

FeedbackInfoForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitFeedback: PropTypes.func,
  invalid: PropTypes.bool,
  submitted: PropTypes.bool,
};

const mapStateToProps = state => ({
  formState: getFormValues('feedbackForm')(state),
});

const mapDispatchToProps = dispatch => ({
  submitFeedback: feedback => dispatch(actions.submitFeedback(feedback)),
});

const FeedbackWithReduxForm = reduxForm({
  form: 'feedbackForm',
})(FeedbackInfoForm);

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackWithReduxForm);
