import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom';

// import styles from './Palaute.css';
import Palauteform from './Palauteform';

import utils from '../../Utils/Utils';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
import constants from '../../Utils/constants';

import { addMessage } from '../../actions/messageActions';

class Palaute extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      name: '',
      email: '',
      feedback: '',
      messages: [],
      warnings: [],
      errors: [],
      lahetetty: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    const value = e.target.value;

    this.setState({ [e.target.name]: value });
    this.setState({
      messages: [],
      warnings: [],
      errors: [],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = '/palaute';
    this.setState(
      {
        messages: [],
        warnings: [],
        errors: [],
      },
      () => {
        if (this.validatePalaute()) {
          ajax
            .sendPost(url, {
              name: this.state.name,
              email: this.state.email,
              feedback: this.state.feedback,
            })
            .then((data) => {
              this.props.addMessage({ type: constants.MESSAGE_SUCCESS, text: 'Kiitos palautteesta!' });
              // this.addMessage(constants.MESSAGE_SUCCESS, 'Palautteen lähetys onnistui!');
            })
            .catch((err) => {
              console.log(err);
              this.addMessage(
                constants.MESSAGE_ERROR,
                'Virhe!',
                'Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen.',
              );
            });
        }
      },
    );
  }

  // Validates if all necessary info has been given
  validatePalaute() {
    let valid = true;
    if (this.state.feedback === '') {
      this.addMessage(constants.MESSAGE_WARNING, 'Virhe!', 'Palaute-kenttä on pakollinen!');
      valid = false;
    }
    if (this.state.email != '' && !utils.isValidEmail(this.state.email)) {
      this.addMessage(constants.MESSAGE_WARNING, 'Virhe!', 'Sähköposti on virheellinen');
      valid = false;
    }
    return valid;
  }

  // Add different kinds of error or warning messages
  addMessage(type, newHeader, newText) {
    if (type === constants.MESSAGE_WARNING) {
      const newWarnings = this.state.warnings;
      newWarnings.push({ header: newHeader, text: newText });
      this.setState({ warnings: newWarnings });
    } else if (type === constants.MESSAGE_ERROR) {
      const newErrors = this.state.errors;
      newErrors.push({ header: newHeader, text: newText });
      this.setState({ erros: newErrors });
    } else if (type === constants.MESSAGE_SUCCESS) {
      const newMessages = this.state.messages;
      newMessages.push({ header: newHeader, text: newText });
      this.setState({ messages: newMessages });
    }
  }

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
            <Messages
              messages={this.state.messages}
              warnings={this.state.warnings}
              errors={this.state.errors}
            />
          }
        />
      </div>
    );
  }
}

Palaute.propTypes = {
  addMessage: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Palaute);
