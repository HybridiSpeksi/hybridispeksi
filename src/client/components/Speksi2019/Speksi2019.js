import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions/bookingActions';
import SpeksiHero from './SpeksiHero';
import styles from './Speksi2019.css';
import Shows from './Shows';
import ContactInfo from './ContactInfo';
import Confirm from './Confirm';
import ajax from './../../Utils/Ajax';

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
      ticketSaleOpen: false,
      ticketSaleMessage: '',
    };

    this.nextState = this.nextState.bind(this);
    this.prevState = this.prevState.bind(this);
  }
  componentDidMount() {
    $(window).scrollTop(0);
    this.props.fetchShows();
    ajax
      .sendGet('/lipunmyyntiAuki')
      .then((tag) => {
        this.setState({ ticketSaleOpen: tag.data[0].truefalse });
      })
      .catch((err) => {
        console.log(err);
      });
    ajax
      .sendGet('/lipunmyyntiMessage')
      .then((tag) => {
        this.setState({ ticketSaleMessage: tag.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
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
        <SpeksiHero />
        <Shows nextState={this.nextState} showPage={wizardState === formState.SELECT_SHOW} />
        <ContactInfo nextState={this.nextState} prevState={this.prevState} showPage={wizardState === formState.FILL_INFO} />
        <Confirm nextState={this.nextState} prevState={this.prevState} showPage={wizardState === formState.CONFIRM_INFO} />
        <div className={styles.payTrail} />
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
