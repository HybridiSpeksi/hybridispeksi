import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';

import ajax from '../Utils/Ajax';

export const actions = {
  FETCH_SHOWS: 'FETCH_SHOWS',
  RECEIVE_SHOWS: 'RECEIVE_SHOWS',
  SELECT_SHOW: 'SELECT_SHOW',
  FETCH_BOOKINGS: 'FETCH_BOOKINGS',
  RECEIVE_BOOKINGS: 'RECEIVE_BOOKINGS',
  SELECT_BOOKING: 'SELECT_BOOKING',
  SAVE_BOOKING: 'SAVE_BOOKING',
};

export function fetchShows() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_SHOWS));
      const res = await ajax.sendGet('/shows');
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_SHOWS));
      dispatch(receiveShows(res));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_SHOWS));
      console.log(err);
      dispatch(messageActions.addErrorMessage({ header: 'Virhe haettaessa esityksiä' }));
    }
  };
}

export function fetchBookings(showId) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_BOOKINGS));
      const res = await ajax.sendGet('/admin/bookings/' + showId);
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_BOOKINGS));
      dispatch(receiveBookings(res));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_BOOKINGS));
      dispatch(messageActions.addErrorMessage({ header: 'Virhe haettaessa varauksia' }));
    }
  };
}

export function createBooking(booking) {
  return async (dispatch) => {
    try {
      const res = await ajax.sendPost('/admin/booking', booking);
      console.log(res);
      // location.replace('/varaustenhallinta');
    } catch (err) {
      dispatch(messageActions.addErrorMessage({ header: 'Virhe tallennettaessa varausta' }));
      console.log(err);
    }
  };
}

export function updateBooking(booking) {
  return async (dispatch) => {
    try {
      const res = await ajax.sendPut('/admin/booking/' + booking.id, booking);
      console.log(res);
      location.replace('/varaustenhallinta');
    } catch (err) {
      dispatch(messageActions.addErrorMessage({ header: 'Virhe tallennettaessa varausta' }));
    }
  };
}

export function selectShow(show) {
  return {
    type: actions.SELECT_SHOW,
    show,
  };
}

export function selectBooking(booking) {
  return {
    type: actions.SELECT_BOOKING,
    booking,
  };
}

function receiveShows(shows) {
  return {
    type: actions.RECEIVE_SHOWS,
    shows,
  };
}

function receiveBookings(bookings) {
  return {
    type: actions.RECEIVE_BOOKINGS,
    bookings,
  };
}
