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
        <Field name="discountCount" id="dCountInput" component={RenderNumber} type="number" label="Alennus (14€)" />
      </div>
      <div className={styles.formRow}>
        <Field name="specialPriceCount" id="sCountInput" component={RenderNumber} type="number" label="Muu hinta kpl" />
        <Field name="specialPrice" id="sPriceInput" component={RenderNumber} type="number" label="Erikoishinta" />
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

const Buttons = ({ booking, deleteBooking }) => {
  const isNewBooking = booking.id === '';
  return (
    <div className={styles.column}>
      <div className={styles.formRow}>
        {isNewBooking ? (
          <button type="submit" className={`${styles.input} ${styles.button} ${styles.success}`}>
              Tallenna uusi varaus
          </button>
        ) : (
          <React.Fragment>
            <button type="button" onClick={deleteBooking} className={`${styles.input} ${styles.button}`}>Poista varaus</button>
            <button type="submit" className={`${styles.input} ${styles.button} ${styles.success}`}>
              Tallenna muutokset
            </button>
          </React.Fragment>
        )}
        <Link to="varaustenhallinta" className={`${styles.input} ${styles.button} ${styles.cancel}`}>
          Peruuta
        </Link>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  booking: PropTypes.object,
  deleteBooking: PropTypes.func,
};

class Booking extends Component {
  componentDidMount() {
    if (this.props.shows.length < 1) { this.props.fetchShows(); }
  }

  render() {
    const {
      booking, selectedShow, handleSubmit, createBooking, updateBooking, deleteBooking,
    } = this.props;
    const onSubmit = (values) => {
      values.showId = selectedShow.id;
      if (booking.id === '') {
        createBooking(values);
      } else {
        updateBooking(values);
      }
    };

    const handleDelete = () => {
      if (confirm('Poistetaanko varaus?')) {
        deleteBooking(booking);
      }
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
            <Buttons booking={booking} deleteBooking={handleDelete} />
          </div>
        </form>
      </div>
    );
  }
}

Booking.propTypes = {
  booking: PropTypes.object,
  selectedShow: PropTypes.object,
  shows: PropTypes.array,
  fetchShows: PropTypes.func,
  createBooking: PropTypes.func,
  updateBooking: PropTypes.func,
  deleteBooking: PropTypes.func,
  handleSubmit: PropTypes.func,
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
  updateBooking: booking => dispatch(actions.updateBooking(booking)),
  deleteBooking: booking => dispatch(actions.deleteBooking(booking)),
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
})(Booking);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
