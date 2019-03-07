import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cuid from 'cuid';
import * as actions from 'actions/eventActions';
import styles from './EventList.css';
import list from '../Listing.css';

const EventList = ({ events }) => {
  return (
    <div className={styles.container}>
      <h3>Tapahtumat</h3>
      <div className={list.container}>
        <div className={list.rows}>

          {events.map((event) => {
            return (
              <div key={cuid()} className={list.row}>
                <span>{event.name}</span>
              </div>
            );
          })}
        </div>
      </div>
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
