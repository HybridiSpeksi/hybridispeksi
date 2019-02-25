import React, { Component } from 'react';
import * as actions from 'actions/bookingActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './SpeksiHero';
import styles from './Speksi2019.css';
import ShowsList from './ShowsList';
import Booking from './Booking';
import BookingInformations from './BookingInformations';

const formState = {
  SELECT_SHOW: 0,
  FILL_INFO: 1,
  CONFIRM_INFO: 2,
};

class Speksi2019 extends Component {
  constructor() {
    super();

    this.state = {
      wizardState: formState.SELECT_SHOW,
    };

    this.nextState = this.nextState.bind(this);
    this.prevState = this.prevState.bind(this);
  }
  componentDidMount() {
    $(window).scrollTop(0);
    this.props.fetchShows();
  }

  nextState() {
    this.setState({
      wizardState: this.state.wizardState + 1,
    });
  }

  prevState() {
    this.setState({
      wizardState: this.state.wizardState - 1,
    });
  }

  render() {
    const { wizardState } = this.state;
    return (
      <div className={styles.container}>
        <Hero />
        {wizardState === formState.SELECT_SHOW ? <ShowsList nextState={this.nextState} /> : null}
        {wizardState === formState.FILL_INFO ? <Booking nextState={this.nextState} prevState={this.prevState} /> : null}
        {wizardState === formState.CONFIRM_INFO ? <BookingInformations nextState={this.nextState} prevState={this.prevState} /> : null}
      </div>
    );
  }
}

Speksi2019.propTypes = {
  fetchShows: PropTypes.func,
};

const mapStateToProps = state => ({
  selectedShow: state.bookingManagement.selectedShow,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Speksi2019);
