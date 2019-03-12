import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { RenderTextfield, RenderNumber, RenderTextarea, RenderCheckbox, RenderDropdown } from './RenderForm';
import styles from './Booking.css';
import ShowsList from './ShowsList';
import * as actions from 'actions/bookingActions';

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

const Tickets = ({
  selectedShow, formState, prices, paymentMethods, booking,
}) => {
  const paymentMethodOptions = () => {
    return paymentMethods.map((method) => {
      return { name: method.name, value: method.id };
    });
  };
  const countPrice = () => {
    if (!formState) return 0;
    const {
      normalCount, discountCount, specialPriceCount, specialPrice,
    } = formState;
    const { normalPrice, discountPrice } = prices;
    return Number(normalCount) * Number(normalPrice) + Number(discountCount) * Number(discountPrice) + Number(specialPriceCount) * Number(specialPrice);
  };
  return (
    <div className={styles.column}>
      <h2>Liput</h2>
      <div className={styles.content}>
        <div>
          <span>{selectedShow.nameLong}</span>
        </div>
        <div className={styles.formRow}>
          <Field name="normalCount" id="nCountInput" component={RenderNumber} type="number" label="Normaali (16€)" />
          <Field name="discountCount" id="dCountInput" component={RenderNumber} type="number" label="Alennus (14€)" />
        </div>
        <div className={styles.formRow}>
          <Field name="specialPriceCount" id="sCountInput" component={RenderNumber} type="number" label="Muu hinta kpl" />
          <Field name="specialPrice" id="sPriceInput" component={RenderNumber} type="number" label="Erikoishinta" />
        </div>
        <div className={styles.price}>
          <span>Hinta yhteensä {countPrice()}€</span>
        </div>
        <div className={styles.formRow}>
          <Field name="additionalInfo" id="additionalArea" component={RenderTextarea} type="text" label="Lisätietoja" rows="5" />
        </div>
        <div className={styles.formRow}>
          <Field name="paymentMethodId" id="paymentMethodSelect" component={RenderDropdown} options={paymentMethodOptions()} />
        </div>
        <div className={styles.formRow}>
          <Field name="paid" id="paid" label="Maksettu" component={RenderCheckbox} type="checkbox" />
          {booking.id === '' ? (
            <Field name="sendConfirmationMail" label="Lähetä varausvahvistus (vain maksetut varaukset)" component={RenderCheckbox} type="checkbox" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

Tickets.propTypes = {
  selectedShow: PropTypes.object,
  formState: PropTypes.object,
  prices: PropTypes.object,
  paymentMethods: PropTypes.array,
  booking: PropTypes.object,
};

const Shows = () => (
  <div className={styles.column}>
    <h2>Esitys</h2>
    <ShowsList />
  </div>
);

const Buttons = ({ booking, deleteBooking, sendConfirmationMail }) => {
  const isNewBooking = booking.id === '';
  const handleSendConfirmationMail = () => {
    if (confirm('Lähetetäänkö varausvahvistus?')) {
      sendConfirmationMail(booking);
    }
  };
  return (
    <div className={styles.column}>
      <div className={styles.formRow}>
        {isNewBooking ? (
          <button type="submit" className={`${styles.input} ${styles.button} ${styles.success}`}>
              Tallenna uusi varaus
          </button>
        ) : (
          <React.Fragment>
            <button type="submit" className={`${styles.input} ${styles.button} ${styles.success}`}>
              Tallenna muutokset
            </button>
            <button type="button" onClick={handleSendConfirmationMail} className={`${styles.input} ${styles.button}`}>Lähetä varausvahvistus</button>
            <button type="button" onClick={deleteBooking} className={`${styles.input} ${styles.button}`}>Poista varaus</button>
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
  sendConfirmationMail: PropTypes.func,
};

class Booking extends Component {
  componentDidMount() {
    if (this.props.shows.length < 1) { this.props.fetchShows(); }
    this.props.fetchPaymentMethods();
  }

  render() {
    const {
      booking, selectedShow, handleSubmit, createBooking, updateBooking, deleteBooking, formState, prices, paymentMethods, sendConfirmationMail,
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
            <Tickets selectedShow={selectedShow} formState={formState} prices={prices} paymentMethods={paymentMethods} booking={booking} />
          </div>
          <div className={styles.row}>
            <Shows />
            <Buttons booking={booking} deleteBooking={handleDelete} sendConfirmationMail={sendConfirmationMail} />
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
  prices: PropTypes.object,
  paymentMethods: PropTypes.array,
  fetchShows: PropTypes.func,
  fetchPaymentMethods: PropTypes.func,
  createBooking: PropTypes.func,
  updateBooking: PropTypes.func,
  deleteBooking: PropTypes.func,
  handleSubmit: PropTypes.func,
  formState: PropTypes.object,
  sendConfirmationMail: PropTypes.func,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
  initialValues: state.bookingManagement.selectedBooking,
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
  shows: state.bookingManagement.shows,
  paymentMethods: state.bookingManagement.paymentMethods,
  formState: getFormValues('bookingForm')(state),
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
  fetchPaymentMethods: () => dispatch(actions.fetchPaymentMethods()),
  createBooking: booking => dispatch(actions.createBooking(booking)),
  updateBooking: booking => dispatch(actions.updateBooking(booking)),
  deleteBooking: booking => dispatch(actions.deleteBooking(booking)),
  sendConfirmationMail: booking => dispatch(actions.sendConfirmationMail(booking)),
});

const BookingWithReduxForm = reduxForm({
  form: 'bookingForm',
})(Booking);

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithReduxForm);
