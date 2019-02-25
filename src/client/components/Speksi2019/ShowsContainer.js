import { fetchShows } from 'actions/bookingActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ShowsContainer.css';
import ShowsList from './ShowsList';
import Booking from './Booking';
import BookingInformations from './BookingInformations';


class ShowsContainer extends Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    return (
      <div className={styles.container}>
        <ShowsList />
        <Booking />
        <BookingInformations />
        <button className={`${styles.buttonNext}`}>Seuraava</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(fetchShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
