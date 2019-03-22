import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
=======
>>>>>>> 54b9e6433631e949af957a678179fb5302882eb1

import styles from './Feedback.css';
import FeedbackInfo from './FeedbackInfo';
import FeedbackDescription from './FeedbackDescription';
<<<<<<< HEAD
import { addMessage, clearMessages } from '../../actions/messageActions';
import { sendFeedback } from '../../actions/feedbackActions';
=======
>>>>>>> 54b9e6433631e949af957a678179fb5302882eb1

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

<<<<<<< HEAD
Feedback.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
=======
export default Feedback;
>>>>>>> 54b9e6433631e949af957a678179fb5302882eb1
