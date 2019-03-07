import React from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from '../../Utils/constants';
import styles from './Messages.css';
import { closeMessage } from '../../actions/messageActions';

const Messages = ({ messages, close }) => (
  <div className={styles.messagesContainer}>
    {messages.filter(message => message.type === constants.MESSAGE_SUCCESS).map(message => (
      <div key={cuid()} className={`${styles.message} ${styles.messageSuccess} ${message.fading ? styles.fadeOut : ''}`} role="alert">
        <span><strong>{message.header}</strong> {message.text}</span>
        <a className={styles.closeIcon} onClick={() => close(message.id)}>
          <i className="fa fa-times" />
        </a>
      </div>
        ))}
    {messages.filter(message => message.type === constants.MESSAGE_WARNING).map(message => (
      <div key={cuid()} className={`${styles.message} ${styles.messageWarning} ${message.fading ? styles.fadeOut : ''}`} role="alert">
        <span><strong>{message.header}</strong> {message.text}</span>
        <a className={styles.closeIcon} onClick={() => close(message.id)}>
          <i className="fa fa-times" />
        </a>
      </div>
        ))}
    {messages.filter(message => message.type === constants.MESSAGE_ERROR).map(message => (
      <div key={cuid()} className={`${styles.message} ${styles.messageError} ${message.fading ? styles.fadeOut : ''}`} role="alert">
        <span><strong>{message.header}</strong> {message.text}</span>
        <a className={styles.closeIcon} onClick={() => close(message.id)}>
          <i className="fa fa-times" />
        </a>
      </div>
        ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.array,
};

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  close: id => dispatch(closeMessage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
