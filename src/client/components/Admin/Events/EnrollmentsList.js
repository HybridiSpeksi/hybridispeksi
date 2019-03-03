import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions/eventActions';
import styles from './EnrollmentsList.css';

const EventList = ({ enrollments }) => {
  return (
    <div>
      <h1>Enrollments</h1>
    </div>
  );
};

EventList.propTypes = {
  enrollments: PropTypes.array,
};

const mapStateToProps = state => ({
  enrollments: state.event.enrollments,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
