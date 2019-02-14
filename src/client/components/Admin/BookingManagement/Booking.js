import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styles from './Booking.css';
import ShowsList from './ShowsList';
import * as actions from 'actions/bookingManagementActions';

const RenderTextfield = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <input id={field.id} className={styles.input} {...field.input} placeholder={field.placeholder} type="text" />
  </div>
);

const RenderNumber = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <input id={field.id} className={styles.input} {...field.input} type="number" />
  </div>
);

const ContactInfo = () => (
  <div className={styles.column}>
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
);

const Tickets = ({ selectedShow }) => (
  <div className={styles.column}>
    <h2>Liput</h2>
    <div className={styles.content}>
      <div>
        <span>{selectedShow.nameLong}</span>
      </div>
      <div className={styles.formRow}>
        <Field name="normalCount" id="nCountInput" component={RenderNumber} type="number" label="Normaali (14€)" />
        <Field name="discountCount" id="dCountInput" component={RenderNumber} type="number" label="Alennus (12€)" />
      </div>
      <div className={styles.formRow}>
        <Field name="specialPriceCount" id="sCountInput" component={RenderNumber} type="number" label="Muu hinta kpl" />
        <Field name="specialPrice" id="sPriceInput" component={RenderNumber} type="number" label="Erokoishinta" />
      </div>
    </div>
  </div>
);

Tickets.propTypes = {
  selectedShow: PropTypes.object,
};

const Shows = () => (
  <div className={styles.column}>
    <h2>Esitys</h2>
    <ShowsList />
  </div>
);

const Buttons = ({ booking }) => {
  const isNewBooking = booking.id === '';
  return (
    <div className={styles.column}>
      <div className={styles.formRow}>
        {isNewBooking ? (
          <React.Fragment>
            <button type="submit" className={`${styles.input} ${styles.button} ${styles.success}`}>
              Tallenna uusi varaus
            </button>
            <Link to="varaustenhallinta" className={`${styles.input} ${styles.button} ${styles.cancel}`}>
              Tyhjennä ja palaa
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button type="submit" className={`${styles.input} ${styles.button} ${styles.success}`}>
              Tallenna muutokset
            </button>
            <Link to="varaustenhallinta" className={`${styles.input} ${styles.button} ${styles.cancel}`}>
              Peruuta ja palaa varaustenhallintaan
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Buttons.propTypes = {
  booking: PropTypes.object,
};

class Booking extends Component {
  componentDidMount() {
    if (this.props.shows.length < 1) { this.props.fetchShows(); }
  }

  render() {
    const {
      booking, selectedShow, initialValues, handleSubmit,
    } = this.props;
    const onSubmit = (values) => {
      console.log(values.normalCount);
    };

    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <ContactInfo />
            <Tickets selectedShow={selectedShow} />
          </div>
          <div className={styles.row}>
            <Shows />
            <Buttons booking={booking} />
          </div>
        </form>
      </div>
    );
  }
}

Booking.propTypes = {
  booking: PropTypes.object,
  selectedShow: PropTypes.object,
  initialValues: PropTypes.object,
  shows: PropTypes.array,
  fetchShows: PropTypes.func,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
  initialValues: state.bookingManagement.selectedBooking,
  selectedShow: state.bookingManagement.selectedShow,
  shows: state.bookingManagement.shows,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
  createBooking: booking => dispatch(actions.createBooking(booking)),
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
})(Booking);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
