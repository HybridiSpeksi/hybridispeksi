import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BookingConfirmation.css';
import pagestyles from './Speksi2019.css';
import PageHero from '../PageHero/PageHero';
import * as actions from 'actions/bookingActions';

class BookingConfirmation extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    const {
      booking, selectedShow, prevState, submitBooking, showPage, prices,
    } = this.props;

    const { normalPrice, discountPrice } = prices;
    const countPrice = () => {
      const {
        normalCount, discountCount, specialPriceCount, specialPrice,
      } = booking;
      return Number(normalCount) * Number(normalPrice) + Number(discountCount) * Number(discountPrice) + Number(specialPriceCount) * Number(specialPrice);
    };
    return (
      <div className={`${styles.container}`}>
        <div className={styles.pageHero}>
          <PageHero title="Voi kikkaran kakkarat!" subTitle="Lipun ostaminen epäonnistui!" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.column}>
            <h2>Varauksen käsittelyssä meni jotain pieleen!</h2>
          </div>
          <div className={styles.column}>
            <h3>Palvelin palautti seuraavanlaisen virheen:</h3>
            <div className={styles.content}>
              <h3>[INSERT PROBLEM HERE]</h3>
            </div>
          </div>
        </div>
        <div className={styles.instructionsContainer}>
          <div className={styles.instructions}>
            <h2>Ohjeita jatkoon</h2>
            <div className={styles.instructionsList}>
              <ol>
                <li>Tarkista varauksesi tiedot.</li>
                <li>Sait sähköpostiisi varausnumeron, jota näyttämällä
                 pääset HybridiSpeksi 2018 -näytökseen.
                </li>
                <li>Jos sinulla on kysyttävää tai tiedoissasi oli virhe,
                 ota yhteyttä lipunmyynti@hybridispeksi.fi.
                </li>
                <li>Nähdään teatterilla!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookingConfirmation.propTypes = {
  booking: PropTypes.object,
  selectedShow: PropTypes.object,
  prevState: PropTypes.func,
  submitBooking: PropTypes.func,
  showPage: PropTypes.bool,
  prices: PropTypes.object,
};

const mapStateToProps = state => ({
  booking: state.bookingManagement.selectedBooking,
  selectedShow: state.bookingManagement.selectedShow,
  prices: state.bookingManagement.prices,
});

const mapDispatchToProps = dispatch => ({
  submitBooking: booking => dispatch(actions.submitBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirmation);
