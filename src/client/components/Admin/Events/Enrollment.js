import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { RenderTextfield } from '../RenderForm';
import form from '../Form.css';

const Fields = () => (
  <div>
    <div className={form.formRow}>
      <Field name="ContactInfo.fname" id="fnameInput" component={RenderTextfield} type="text" placeholder="Etunimi" />
      <Field name="ContactInfo.lname" id="lnameInput" component={RenderTextfield} type="text" placeholder="Sukunimi" />
    </div>
    <div className={form.formRow}>
      <Field name="ContactInfo.email" id="emailInput" component={RenderTextfield} type="text" placeholder="Sähköposti" />
      <Field name="ContactInfo.pnumber" id="pnumberInput" component={RenderTextfield} type="text" placeholder="Puhelinnumero" />
    </div>
  </div>
);

const Enrollment = ({ handleSubmit }) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Enrollment</h1>
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
}, (Enrollment));

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentWithReduxForm);
