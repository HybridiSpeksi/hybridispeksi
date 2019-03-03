import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Event.css';
import EnrollmentInfo from './EnrollmentInfo';
import { Description } from './Description';
import * as actions from 'actions/eventActions';

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
    return (
      <div className={styles.container}>
        <div className={styles.eventContainer}>
          <Description />
          <EnrollmentInfo />
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  params: PropTypes.object,
  fetchEvent: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(actions.fetchEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);

