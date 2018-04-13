import React, { Component } from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './constants';
// import styles from './Messages.css';

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.filter(message => message.type === constants.MESSAGE_SUCCESS).map(message => (
          <div key={cuid()} className="alert alert-info" role="alert">
            <strong>{message.header}</strong> {message.text}
          </div>
        ))}
        {messages.filter(message => message.type === constants.MESSAGE_WARNING).map(message => (
          <div key={cuid()} className="alert alert-warning" role="alert">
            <strong>{message.header}</strong> {message.text}
          </div>
        ))}
        {messages.filter(message => message.type === constants.MESSAGE_FAILURE).map(message => (
          <div key={cuid()} className="alert alert-danger" role="alert">
            <strong>{message.header}</strong> {message.text}
          </div>
        ))}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
};

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(Messages);
