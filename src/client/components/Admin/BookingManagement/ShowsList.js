import React from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ShowsList.css';
import { selectShow } from 'actions/bookingManagementActions';

const Show = ({ show, handleClick, selected }) => (
  <button className={`${styles.showRow} ${selected ? styles.selected : ''}`} onClick={() => handleClick(show)}>
    <span>{show.nameLong}</span>
    <span>{show.bookingCount}/{show.limit}</span>
  </button>
);

Show.propTypes = {
  show: PropTypes.object,
  handleClick: PropTypes.func,
  selected: PropTypes.bool,
};

const ShowsList = ({ shows, selectedShow, select }) => {
  const handleClick = (show) => {
    select(show);
  };
  return (
    <div className={styles.container} >
      {shows.map((show) => {
        return <Show show={show} key={cuid()} handleClick={handleClick} selected={show.id === selectedShow.id} />;
      })}
    </div>
  );
};

ShowsList.propTypes = {
  shows: PropTypes.array,
  select: PropTypes.func,
  selectedShow: PropTypes.object,
};

const mapStateToProps = state => ({
  shows: state.bookingManagement.shows,
  selectedShow: state.bookingManagement.selectedShow,
});

const mapDispatchToProps = dispatch => ({
  select: show => dispatch(selectShow(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
