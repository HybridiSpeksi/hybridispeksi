import React from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import styles from './Shows.css';
import pagestyles from './Speksi2019.css';
import * as actions from 'actions/bookingActions';


const Show = ({ show, handleClick, selected }) => (
  <div className={`${styles.showRow} ${selected ? styles.selected : ''}`} onClick={() => handleClick(show)}>
    <h3 className={`${styles.showDate}`}>
      <div><Moment format="DD.MM.">{show.date}</Moment></div>
      <div>klo <Moment format="HH.mm">{show.date}</Moment> </div>
    </h3>
    <p className={`${styles.showDay}`}><Moment format="dddd" locale="fi">{show.date}</Moment></p>
    <div className={`${styles.showTime}`}>
      <div>{show.nameShort}</div>
      <div className={`${styles.showSpace}`}>
        {show.bookingCount >= 100
          ? show.bookingCount === show.limit
            ? 'LOPPUUNMYYTY'
              : 'MELKEIN TÄYNNÄ'
            : 'TILAA'}
      </div>
    </div>
  </div>
);

Show.propTypes = {
  show: PropTypes.object,
  handleClick: PropTypes.func,
  selected: PropTypes.bool,
};

const ShowsList = ({
  shows, selectedShow, select, nextState, showPage,
}) => {
  const handleClick = (show) => {
    select(show);
  };
  const disableNext = selectedShow.id === '';
  return (
    <div className={`${styles.container} ${!showPage ? pagestyles.hidden : ''}`} >
      <h2 className={styles.showHeader}>Valitse näytös</h2>
      {shows.map((show) => {
        return <Show show={show} key={cuid()} handleClick={handleClick} selected={show.id === selectedShow.id} />;
      })}
      <div className={pagestyles.buttonContainer}>
        <button onClick={nextState} className={`${pagestyles.buttonNext} ${disableNext ? pagestyles.disabled : ''}`} disabled={disableNext}>Seuraava</button>
      </div>
    </div>
  );
};

ShowsList.propTypes = {
  shows: PropTypes.array,
  select: PropTypes.func,
  selectedShow: PropTypes.object,
  fetchBookings: PropTypes.func,
  nextState: PropTypes.func,
};

const mapStateToProps = state => ({
  shows: state.bookingManagement.shows,
  selectedShow: state.bookingManagement.selectedShow,
});

const mapDispatchToProps = dispatch => ({
  select: show => dispatch(actions.selectShow(show)),
  fetchBookings: showId => dispatch(actions.fetchBookings(showId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
