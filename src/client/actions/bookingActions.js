import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';
import * as loaderActions from './loaderActions';

import ajax from '../Utils/Ajax';

export const actions = {
  FETCH_SHOWS: 'FETCH_SHOWS',
  RECEIVE_SHOWS: 'RECEIVE_SHOWS',
  SELECT_SHOW: 'SELECT_SHOW',
  FETCH_BOOKINGS: 'FETCH_BOOKINGS',
  RECEIVE_BOOKINGS: 'RECEIVE_BOOKINGS',
  SELECT_BOOKING: 'SELECT_BOOKING',
  SAVE_BOOKING: 'SAVE_BOOKING',
  CLEAR_SELECTED_SHOW: 'CLEAR_SELECTED_SHOW',
  CLEAR_SELECTED_BOOKING: 'CLEAR_SELECTED_BOOKING',
  RECEIVE_PAYMENT_METHODS: 'RECEIVE_PAYMENT_METHODS',
  RECEIVE_TICKETSALEOPEN: 'RECEIVE_TICKETSALEOPEN',
  RECEIVE_TICKETSALEMESSAGE: 'RECEIVE_TICKETSALEMESSAGE',
};

function handleError(err, dispatch) {
  dispatch(loaderActions.hideLoader());
  dispatch(messageActions.addErrorMessage({ header: err.message }, 3000));
}

function handleWarning(res, dispatch) {
  dispatch(loaderActions.hideLoader());
  dispatch(messageActions.addWarningMessage({ header: res.message }, 3000));
}

export function submitBooking(booking) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPost('/booking', booking);
      if (!res.success) {
        handleWarning(res, dispatch);
        return;
      }
      location.replace(res.data.url);
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function fetchShows() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_SHOWS));
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/shows');
      dispatch(loaderActions.hideLoader());
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_SHOWS));
      dispatch(receiveShows(res));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_SHOWS));
      console.log(err);
      dispatch(messageActions.addErrorMessage({ header: 'Virhe haettaessa esityksiä' }));
    }
  };
}

export function fetchAllBookings() {
  return async (dispatch) => {
    try {
      const res = await ajax.sendGet('/admin/bookings');
      dispatch(receiveBookings(res.data));
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function fetchBookings(showId) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/admin/bookings/' + showId);
      dispatch(loaderActions.hideLoader());
      dispatch(receiveBookings(res));
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function createBooking(booking) {
  return async (dispatch) => {
    try {
      dispatch(messageActions.clearMessages());
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPost('/admin/booking', booking);
      if (!res.success) {
        handleWarning(res, dispatch);
        return;
      }
      dispatch(loaderActions.hideLoader());
      dispatch(messageActions.addSuccessMessage({ header: 'Varaus luotiin onnistuneesti!' }));
      setTimeout(() => {
        location.replace('/varaustenhallinta');
      }, 700);
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function updateBooking(booking) {
  return async (dispatch) => {
    try {
      dispatch(messageActions.clearMessages());
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPut('/admin/booking/' + booking.id, booking);
      if (!res.success) {
        handleWarning(res, dispatch);
        return;
      }
      dispatch(messageActions.addSuccessMessage({ header: 'Muutokset tallennettiin onnistuneesti!' }));
      dispatch(loaderActions.hideLoader());
      setTimeout(() => {
        location.replace('/varaustenhallinta');
      }, 700);
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function deleteBooking(booking) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      await ajax.sendDelete('/admin/booking/' + booking.id);
      dispatch(messageActions.addSuccessMessage({ header: 'Varaus poistettiin onnistuneesti!' }, 2000));
      dispatch(loaderActions.hideLoader());
      setTimeout(() => {
        location.replace('/varaustenhallinta');
      }, 700);
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function createShow(show) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      await ajax.sendPost('/admin/h/show', show);
      dispatch(messageActions.addSuccessMessage({ header: 'Esitys luotiin onnistuneesti' }, 2000));
      dispatch(loaderActions.hideLoader());
      dispatch(fetchShows());
      dispatch(clearSelectedShow());
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function updateShow(show) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      await ajax.sendPut('/admin/h/show/' + show.id, show);
      dispatch(messageActions.addSuccessMessage({ header: 'Esitys päivitettiin onnistuneesti' }, 2000));
      dispatch(fetchShows());
      dispatch(clearSelectedShow());
      dispatch(loaderActions.hideLoader());
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function deleteShow(show) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      await ajax.sendDelete('/admin/h/show/' + show.id);
      dispatch(fetchShows());
      dispatch(clearSelectedShow());
      dispatch(messageActions.addSuccessMessage({ header: 'Esitys poistettiin onnistuneesti' }, 2000));
      dispatch(loaderActions.hideLoader());
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function sendConfirmationMail(booking) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/admin/sendConfirmationMail/' + booking.id);
      if (!res.success) {
        handleWarning(res, dispatch);
        return;
      }
      dispatch(loaderActions.hideLoader());
      dispatch(messageActions.addSuccessMessage({ header: 'Varausvahvistus lähetetty' }, 3000));
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function fetchPaymentMethods() {
  return async (dispatch) => {
    try {
      const res = await ajax.sendGet('/paymentmethods');
      dispatch(receivePaymentMethods(res.data));
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function fetchTicketSaleOpen() {
  return async (dispatch) => {
    try {
      const res = await ajax.sendGet('/lipunmyyntiAuki');
      dispatch(receiveTicketSaleOpen(res.data[0].truefalse));
    } catch (err) {
      handleError(err, dispatch);
    }
  };
}

export function fetchTicketSaleMessage() {
  return async (dispatch) => {
    try {
      const res = await ajax.sendGet('/lipunmyyntiMessage');
      dispatch(receiveTicketSaleMessage(res.data[0].name));
    } catch (err) {
      handleError(err, dispatch);
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

export function clearSelectedShow() {
  return {
    type: actions.CLEAR_SELECTED_SHOW,
  };
}

export function clearSelectedBooking() {
  return {
    type: actions.CLEAR_SELECTED_BOOKING,
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

function receivePaymentMethods(paymentMethods) {
  return {
    type: actions.RECEIVE_PAYMENT_METHODS,
    paymentMethods,
  };
}

function receiveTicketSaleOpen(ticketSaleOpen) {
  return {
    type: actions.RECEIVE_TICKETSALEOPEN,
    ticketSaleOpen,
  };
}

function receiveTicketSaleMessage(ticketSaleMessage) {
  return {
    type: actions.RECEIVE_TICKETSALEMESSAGE,
    ticketSaleMessage,
  };
}
