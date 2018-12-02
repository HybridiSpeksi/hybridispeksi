import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Vuodenspeksaaja.css';

import Form from './VuodenspeksaajaForm';

import { addMessage, clearMessages } from '../../actions/messageActions';
import { sendVote } from '../../actions/feedbackActions';

class Vuodenspeksaaja extends Component {
  constructor() {
    super();
    this.state = {
      sent: false,
      submission: {
        name: '',
        personToVote: '',
        comment: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const _submission = { ...this.state.submission };
    _submission[e.target.name] = e.target.value;
    this.setState({ submission: _submission });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearMessages();
    this.props.sendVote(this.state.submission);
  }

  render() {
    return (
      <div className={'container ' + styles.container}>
        <div className={'row justify-content-center ' + styles.banner}>
          <div className={'col-sm-11 col-md-9 col-lg-6 ' + styles.form_canvas}>
            <h2>Vuoden Speksaaja</h2>
            <p>
             Vuoden 2018 HybridiSpeksi vietiin kunnialla päätökseen. Mukana on ollut tekemässä
             suuri joukko hienoja ihmisiä joista speksin hallitus haluaa palkita Vuoden Speksaajan.
             Ilmianna kanssaspeksaajasi ja perustele miksi juuri hän on ansainnut pienen huomionosoituksen.
             Äänestää voi torstai-iltaan asti, jonka jälkeen Vuoden Speksaaja julkistetaan hautajaisissa.
            </p>
            <Form
              handleChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submission={this.state.submission}
              sent={this.state.sent}
            />
          </div>
        </div>
      </div>
    );
  }
}

Vuodenspeksaaja.propTypes = {
  clearMessages: PropTypes.func,
  sendVote: PropTypes.func,
};

const mapStateToProps = state => ({
  messages: state.messages,
  ajaxState: state.ajax,
});

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
  sendVote: vote => dispatch(sendVote(vote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vuodenspeksaaja);
