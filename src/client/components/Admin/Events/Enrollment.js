import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, isDirty } from 'redux-form';
import { RenderTextfield, RenderCheckbox, RenderDropdown } from '../RenderAdminForm';
import styles from './Enrollment.css';
import form from '../Form.css';
import * as actions from 'actions/eventActions';

const Fields = ({ formDirty, clearEnrollment, deleteEnrollment }) => {
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
    <div className={form.formContainer}>
      <div className={form.formRow}>
        <Field name="ContactInfo.fname" id="fnameInput" component={RenderTextfield} type="text" placeholder="Etunimi" />
        <Field name="ContactInfo.lname" id="lnameInput" component={RenderTextfield} type="text" placeholder="Sukunimi" />
      </div>
      <div className={form.formRow}>
        <Field name="ContactInfo.email" id="emailInput" component={RenderTextfield} type="text" placeholder="Sähköposti" />
        <Field name="ContactInfo.pnumber" id="pnumberInput" component={RenderTextfield} type="text" placeholder="Puhelinnumero" />
      </div>
      <div className={form.formRow}>
        <Field name="presentGreeting" id="greetingsCheckbox" component={RenderCheckbox} type="checkbox" label="Esittää tervehdyksen" />
        <Field name="greetingOrganization" id="organizationInput" component={RenderTextfield} type="text" label="Edustettava taho" />
      </div>
      <div className={form.formRow}>
        <Field name="avec" id="avecInput" component={RenderTextfield} type="text" label="Avec" />
      </div>
      <div className={form.formRow}>
        <Field name="partyExpectation" id="partyInput" component={RenderTextfield} type="text" label="Pöytäseurue" />
      </div>
      <div className={form.formRow}>
        <Field name="menu" id="menuInput" component={RenderDropdown} label="Menu" options={menuOptions()} />
        <Field name="alcohol" id="drinkInput" component={RenderDropdown} label="Juoma" options={drinkMenuOptions()} />
      </div>
      <div className={form.formRow}>
        <Field name="diet" id="dietInput" component={RenderTextfield} type="text" label="Ruokavaliot" />
      </div>
      <div className={form.formRow}>
        <Field name="sillis" id="sillisSelect" component={RenderCheckbox} type="checkbox" label="Osallistuu sillikselle" />
        <Field name="memberOfSpeksi" id="speksiSelect" component={RenderCheckbox} type="checkbox" label="HybridiSpeksi ry:n jäsen" />
      </div>
      <div className={form.formRow}>
        {formDirty ? (
          <button type="submit" className={`${form.input} ${form.button}`}>Tallenna muutokset</button>
        ) : ''}
        <button type="button" onClick={clearEnrollment} className={`${form.input} ${form.button}`}>Tyhjennä valinta</button>
        <button type="button" className={`${form.input} ${form.button}`}>Poista</button>
      </div>
    </div>
  );
};

Fields.propTypes = {
  formDirty: PropTypes.bool,
  clearEnrollment: PropTypes.func,
  deleteEnrollment: PropTypes.func,
};

const Enrollment = ({
  handleSubmit, updateEnrollment, enrollment, formDirty, clearEnrollment,
}) => {
  const onSubmit = (values) => {
    values.id = enrollment.id;
    updateEnrollment(values);
  };
  return (
    <div className={styles.container}>
      <h3>Tiedot</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fields formDirty={formDirty} {...clearEnrollment} />
      </form>
    </div>
  );
};

Enrollment.propTypes = {
  handleSubmit: PropTypes.func,
  updateEnrollment: PropTypes.func,
  enrollment: PropTypes.object,
  formDirty: PropTypes.bool,
  clearEnrollment: PropTypes.func,
};

const mapStateToProps = state => ({
  enrollment: state.event.enrollment,
  initialValues: state.event.enrollment,
  formDirty: isDirty('enrollmentManagementForm')(state),
});

const mapDispatchToProps = dispatch => ({
  updateEnrollment: enrollment => dispatch(actions.updateEnrollment(enrollment)),
  clearEnrollment: () => dispatch(actions.clearEnrollment()),
});

const EnrollmentWithReduxForm = reduxForm({
  form: 'enrollmentManagementForm',
  enableReinitialize: true,
})(Enrollment);

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentWithReduxForm);
