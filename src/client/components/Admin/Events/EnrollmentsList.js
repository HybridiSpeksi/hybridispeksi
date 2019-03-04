import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cuid from 'cuid';
import * as actions from 'actions/eventActions';
import styles from './EnrollmentsList.css';
import list from '../Listing.css';

const EventList = ({ enrollments }) => {
  return (
    <div className={styles.container}>
      <h3>Enrollments</h3>
      <div className={list.container}>
        <div className={list.rows}>
          {enrollments.map((enrollment) => {
            const { fname, lname, email } = enrollment.ContactInfo;
            return (
              <div key={cuid()} className={list.row}>
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
};

const mapStateToProps = state => ({
  enrollments: state.event.enrollments,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
