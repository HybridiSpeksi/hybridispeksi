import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions/bookingActions';
import SpeksiHero from './SpeksiHero';
import styles from './Speksi2019.css';
import Shows from './Shows';
import ContactInfo from './ContactInfo';
import Confirm from './Confirm';

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
    const { handleSubmit, selectBooking, selectedShow } = this.props;
    const onSubmit = (values) => {
      values.showId = selectedShow.id;
      selectBooking(values);
    };
    return (
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <SpeksiHero />
        <Shows nextState={this.nextState} showPage={wizardState === formState.SELECT_SHOW} />
        <ContactInfo nextState={this.nextState} prevState={this.prevState} showPage={wizardState === formState.FILL_INFO} />
        <Confirm nextState={this.nextState} prevState={this.prevState} showPage={wizardState === formState.CONFIRM_INFO} />
      </form>
    );
  }
}

Speksi2019.propTypes = {
  fetchShows: PropTypes.func,
  handleSubmit: PropTypes.func,
  selectBooking: PropTypes.func,
  selectedShow: PropTypes.func,
};

const mapStateToProps = state => ({
  selectedShow: state.bookingManagement.selectedShow,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
  selectBooking: booking => dispatch(actions.selectBooking(booking)),
});

const SpeksiWithReduxForm = reduxForm({
  form: 'publicBookingForm',
})(Speksi2019);

export default connect(mapStateToProps, mapDispatchToProps)(SpeksiWithReduxForm);
