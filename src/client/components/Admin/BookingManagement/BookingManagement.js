import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class BookingManagement extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Bookings</h1>
      </div>
    );
  }
}

BookingManagement.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BookingManagement);
