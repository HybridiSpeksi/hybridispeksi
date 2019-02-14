import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './BookingManagement.css';
import ShowsList from './ShowsList';
import BookingsList from './BookingsList';
import BookingInfo from './BookingInfo';
import { fetchShows } from 'actions/bookingManagementActions';


class BookingManagement extends Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.showsList}>
          <ShowsList />
        </div>
        <div className={styles.bookingsList}>
          <BookingsList />
        </div>
        <div className={styles.bookingInfo}>
          <BookingInfo />
        </div>
      </div>
    );
  }
}

BookingManagement.propTypes = {
  fetchShows: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(fetchShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingManagement);