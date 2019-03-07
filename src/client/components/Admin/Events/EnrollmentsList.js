import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cuid from 'cuid';
import * as actions from 'actions/eventActions';
import styles from './EnrollmentsList.css';
import list from '../Listing.css';

const EventList = ({ enrollments, selectEnrollment, selectedEnrollment }) => {
  return (
    <div className={styles.container}>
      <h3>Enrollments</h3>
      <div className={list.container}>
        <div className={list.rows}>
          {enrollments.map((enrollment) => {
            const { fname, lname, email } = enrollment.ContactInfo;
            const selected = enrollment.id === selectedEnrollment.id;
            return (
              <div key={cuid()} className={`${list.row} ${selected ? list.selected : ''}`} onClick={() => selectEnrollment(enrollment)}>
                <span>{fname} {lname}</span>
                <span>{email}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

EventList.propTypes = {
  enrollments: PropTypes.array,
  selectEnrollment: PropTypes.func,
  selectedEnrollment: PropTypes.object,
};

const mapStateToProps = state => ({
  enrollments: state.event.enrollments,
  selectedEnrollment: state.event.enrollment,
});

const mapDispatchToProps = dispatch => ({
  selectEnrollment: enrollment => dispatch(actions.selectEnrollment(enrollment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
