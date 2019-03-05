import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Feedback.css';
import FeedbackInfo from './FeedbackInfo';
import FeedbackDescription from './FeedbackDescription';
import { addMessage, clearMessages } from '../../actions/messageActions';
import { sendFeedback } from '../../actions/feedbackActions';

class Feedback extends Component {
  constructor(props) {
    super(props);

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
    const feedback = {
      name: this.state.name,
      email: this.state.email,
      feedback: this.state.feedback,
    };
    this.props.sendFeedback(feedback);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.feedbackContainer}>
          <FeedbackDescription />
          <FeedbackInfo />
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
