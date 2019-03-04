import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventList from './EventList';
import EnrollmentsList from './EnrollmentsList';
import Enrollment from './Enrollment';
import * as actions from 'actions/eventActions';
import styles from './EventManagement.css';

class EventManagement extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>EventManagement</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.eventsList}>
            <EventList />
          </div>
          <div className={styles.enrollmentsList}>
            <EnrollmentsList />
          </div>
          <div className={styles.enrollment}>
            <Enrollment />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(actions.fetchEvents()),
  fetchEnrollments: eventId => dispatch(actions.fetchEnrollments(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventManagement);
