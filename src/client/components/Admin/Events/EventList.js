import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions/eventActions';
import styles from './EventList.css';

const EventList = ({ events }) => {
  return (
    <div>
      {events.map((event) => {
        return <div className={styles.row}>{event.name}</div>;
      })}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array,
};

const mapStateToProps = state => ({
  events: state.event.events,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
