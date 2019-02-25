import React, { Component } from 'react';
import * as actions from 'actions/bookingActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './SpeksiHero';
import styles from './Speksi2019.css';
import ShowsList from './ShowsList';
import Booking from './Booking';
import BookingInformations from './BookingInformations';

class Speksi2019 extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
    this.props.fetchShows();
  }

  render() {
    return (
      <div className={styles.container}>
        <Hero />
        <ShowsList />
        <Booking />
        <BookingInformations />
        <button className={`${styles.buttonNext}`}>Seuraava</button>
      </div>
    );
  }
}

Speksi2019.propTypes = {
  fetchShows: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Speksi2019);
