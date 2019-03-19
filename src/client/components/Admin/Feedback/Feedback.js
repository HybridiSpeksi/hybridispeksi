import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cuid from 'cuid';
import styles from './AdminFeedback.css';
import ajax from '../../../Utils/Ajax';
import * as messageActions from 'actions/messageActions';
import * as loaderActions from 'actions/loaderActions';

const FeedbackCard = ({ name, email, feedback }) => (
  <div className={styles.feedbackCard}>
    <div className={styles.feedbackContent}>
      <p>{feedback}</p>
    </div>
    <div className={styles.name}>
      <p>{name}</p>
    </div>
    <div className={styles.email}>
      <p>{email}</p>
    </div>
  </div>
);

FeedbackCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  feedback: PropTypes.string,
};

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      feedbacks: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.props.showLoader();
      const res = await ajax.sendGet('/admin/palautteet');
      console.log(res.data);
      this.setState({ feedbacks: res.data });
      this.props.hideLoader();
    } catch (e) {
      this.props.addWarningMessage({ heading: 'Virhe haettaessa palautteita: ', text: e.message }, 5000);
    }
  }

  render() {
    const feedbackList = this.state.feedbacks.map(feedback => (
      <FeedbackCard key={cuid()} {...feedback} />
    ));
    return (
      <div className={styles.container}>
        <h1>Palautteet</h1>

        <div className={styles.feedbackList}>
          {feedbackList}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  addWarningMessage: PropTypes.func,
  showLoader: PropTypes.func,
  hideLoader: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addWarningMessage: message => dispatch(messageActions.addWarningMessage(message)),
  showLoader: () => dispatch(loaderActions.showLoader()),
  hideLoader: () => dispatch(loaderActions.hideLoader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
