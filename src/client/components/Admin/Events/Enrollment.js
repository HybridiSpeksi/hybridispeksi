import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { RenderTextfield, RenderCheckbox, RenderDropdown } from '../RenderAdminForm';
import styles from './Enrollment.css';
import form from '../Form.css';

const Fields = () => {
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
    <div>
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
        <Field name="diet" id="dietInput" component={RenderTextfield} type="text" label="Ruokavaliot" />
      </div>
    </div>
  );
};

const Enrollment = ({ handleSubmit }) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <h3>Tiedot</h3>
      <form onSubmit={handleSubmit(onSubmit)} />
      <Fields />
    </div>
  );
};

Enrollment.propTypes = {
  handleSubmit: PropTypes.func,
};

const mapStateToProps = state => ({
  enrollment: state.event.enrollment,
  initialValues: state.event.enrollment,
});

const mapDispatchToProps = dispatch => ({

});

const EnrollmentWithReduxForm = reduxForm({
  form: 'enrollmentManagementForm',
  enableReinitialize: true,
})(Enrollment);

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentWithReduxForm);
