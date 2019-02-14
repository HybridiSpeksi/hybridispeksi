import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styles from './Booking.css';
import ShowsList from './ShowsList';
import * as actions from 'actions/bookingManagementActions';

const RenderTextfield = (field) => {
  return (
    <React.Fragment>
      <label htmlFor={field.id}>{field.label}</label>
      <input id={field.id} className={styles.input} {...field.input} placeholder={field.placeholder} type="text" />
    </React.Fragment>
  );
};

const RenderNumber = (field) => {
  return (
    <React.Fragment>
      <label htmlFor={field.id}>{field.label}</label>
      <input id={field.id} className={styles.input} {...field.input} type="number" />
    </React.Fragment>
  );
};

class Booking extends Component {
  componentDidMount() {
    console.log('mounted');
    this.props.fetchShows();
  }
  render() {
    const { booking, initialValues } = this.props;
    const handleSubmit = (values) => {
      values.preventDefault();
    };

    const clearForm = () => {
      console.log('clear');
    };
    const isNewBooking = booking.id === '';
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.contactInfo}>
            <h2>Yhteystiedot</h2>
            <div className={styles.content}>
              <div className={styles.formRow}>
                <Field name="ContactInfo.fname" id="fnameInput" component={RenderTextfield} type="text" placeholder="Etunimi" />
                <Field name="ContactInfo.lname" id="lnameInput" component={RenderTextfield} type="text" placeholder="Sukunimi" />
              </div>
              <div className={styles.formRow}>
                <Field name="ContactInfo.email" id="emailInput" component={RenderTextfield} type="text" placeholder="Sähköposti" />
                <Field name="ContactInfo.pnumber" id="pnumberInput" component={RenderTextfield} type="text" placeholder="Puhelinnumero" />
              </div>
            </div>
          </div>
          <div className={styles.tickets}>
            <h2>Liput</h2>
            <div className={styles.content}>
              <div className={styles.formRow}>
                <Field name="normalCount" id="nCountInput" component={RenderNumber} type="number" label="14€" />
                <Field name="discountCount" id="dCountInput" component={RenderNumber} type="number" />
                <Field name="specialPriceCount" id="sCountInput" component={RenderNumber} type="number" />
              </div>
            </div>
          </div>
          <div className={styles.showsList}>
            <h2>Esitys</h2>
            <ShowsList />
          </div>
          <div className={styles.buttons}>
            <div className={styles.formRow}>
              {isNewBooking ? (
                <React.Fragment>
                  <button type="submit" className={`${styles.input} ${styles.success}`}>Luo uusi varaus</button>
                  <button type="button" onClick={clearForm} className={`${styles.input} ${styles.cancel}`}>Tyhjennä ja palaa</button>
                </React.Fragment>
            ) : (
              <React.Fragment>
                <button type="submit" className={`${styles.input} ${styles.success}`}>Tallenna muutokset</button>
                <button type="button" onClick={clearForm} className={`${styles.input} ${styles.cancel}`}>Peruuta ja palaa varaustenhallintaan</button>
              </React.Fragment>
            )}

            </div>
          </div>
        </form>
      </div>
    );
  }
}

Booking.propTypes = {
  booking: PropTypes.object,
  initialValues: PropTypes.object,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
  initialValues: state.bookingManagement.selectedBooking,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
  enableReinitialize: true,
})(Booking);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
