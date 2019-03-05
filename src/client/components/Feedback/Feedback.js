import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Feedback.css';
import FeedbackInfo from './FeedbackInfo';
import FeedbackDescription from './FeedbackDescription';
import { addMessage, clearMessages } from '../../actions/messageActions';
import { sendFeedback } from '../../actions/feedbackActions';

class Feedback extends Component {
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
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
