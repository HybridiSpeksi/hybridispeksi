import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cuid from 'cuid';
import * as actions from 'actions/eventActions';
import styles from './EventList.css';
import list from '../Listing.css';
import { closeRegistration } from '../../../actions/eventActions';

const EventList = ({ events }) => {
  return (
    <div className={styles.container}>
      <h3>Tapahtumat</h3>
      <div className={list.container}>
        <div className={list.rows}>

          {events.map((event) => {
            return (
              <div key={cuid()} className={list.row}>
                <span>{event.name}</span> {event.registrationOpen === true ? <button className={styles.closeEvent} onClick={() => closeRegistration(event)}>Sulje ilmo</button> : <button className={styles.closeEvent} onClick={() => openRegistration(event)}>Avaa ilmo</button> }
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
  openRegistration: PropTypes.func,
  closeRegistration: PropTypes.func,
};

const mapStateToProps = state => ({
  events: state.event.events,
});

const mapDispatchToProps = dispatch => ({
  openRegistration: event => dispatch(actions.openRegistration(event)),
  closeRegistration: event => dispatch(actions.closeRegistration(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
