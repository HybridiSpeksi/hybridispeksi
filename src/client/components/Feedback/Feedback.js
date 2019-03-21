import React, { Component } from 'react';

import styles from './Feedback.css';
import FeedbackInfo from './FeedbackInfo';
import FeedbackDescription from './FeedbackDescription';

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

export default Feedback;
