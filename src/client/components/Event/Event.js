import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Event.css';
import EnrollmentInfo from './EnrollmentInfo';
import { Description } from './Description';
import * as actions from 'actions/eventActions';

const EventNotFound = ({ loading }) => {
  if (loading) {
    return null;
  }
  return (
    <div className={styles.eventNotFound}>
      <h2>Hakemaasi tapahtumaa ei löytynyt</h2>
    </div>
  );
};

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const eventId = this.props.params.eventId;
    this.props.fetchEvent(eventId);
  }

  render() {
    const { event, loading } = this.props;
    return (
      <div className={styles.container}>
        {!event.id || event.id === '' ? (
          <EventNotFound loading={loading} />
          ) : (
            <div className={styles.eventContainer}>
              <React.Fragment>
                <Description />
                <EnrollmentInfo />
              </React.Fragment>
            </div>
          )}
      </div>
    );
  }
}

Event.propTypes = {
  params: PropTypes.object,
  fetchEvent: PropTypes.func,
  event: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  event: state.event.event,
  loading: state.loader.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(actions.fetchEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

