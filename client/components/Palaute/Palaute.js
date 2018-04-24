import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import styles from './Palaute.css';
import Palauteform from './Palauteform';
import Messages from '../../Utils/Messages';

import { addMessage, clearMessages } from '../../actions/messageActions';
import { sendFeedback } from '../../actions/feedbackActions';

class Palaute extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      name: '',
      email: '',
      feedback: '',
      lahetetty: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
    if (this.props.messages.length > 0) {
      this.props.clearMessages();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearMessages();
    if (this.validatePalaute()) {
      const feedback = {
        name: this.state.name,
        email: this.state.email,
        feedback: this.state.feedback,
      };
      this.props.sendFeedback(feedback);
    }
  }

  // Validates if all necessary info has been given
  // Deprecated, validation happens in server
  /* validatePalaute() {
    let valid = true;
    if (this.state.feedback === '') {
      this.props.addMessage({
        type: constants.MESSAGE_WARNING,
        header: 'Virhe!',
        text: 'Palaute-kenttä on pakollinen!',
      });
      valid = false;
    }
    if (this.state.email !== '' && !utils.isValidEmail(this.state.email)) {
      this.props.addMessage({
        type: constants.MESSAGE_WARNING,
        header: 'Virhe!',
        text: 'Sähköposti on virheellinen',
      });
      valid = false;
    }
    return valid;
  }
 */
  render() {
    return (
      <div>
        <Palauteform
          lahetetty={this.state.lahetetty}
          name={this.state.name}
          email={this.state.email}
          feedback={this.state.feedback}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          messages={
            <Messages />
          }
        />
      </div>
    );
  }
}

Palaute.propTypes = {
  clearMessages: PropTypes.func,
  sendFeedback: PropTypes.func,
  messages: PropTypes.array,
};

const mapStateToProps = state => ({
  messages: state.messages,
  ajaxState: state.ajax,
});

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
  sendFeedback: feedback => dispatch(sendFeedback(feedback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Palaute);
