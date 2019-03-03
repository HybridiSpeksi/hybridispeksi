import * as messageActions from './messageActions';
import * as loaderActions from './loaderActions';
import ajax from '../Utils/Ajax';

export const actions = {
  RECEIVE_ENROLLMENTS: 'RECEIVE_ENROLLMENTS',
  SELECT_ENROLLMENT: 'SELECT_ENROLLMENT',
  CLEAR_ENROLLMENT: 'CLEAR_ENROLLMENT',
  RECEIVE_EVENT: 'RECEIVE_EVENT',
  RECEIVE_EVENTS: 'RECEIVE_EVENTS',
  SELECT_EVENT: 'SELECT_EVENT',
};


export function fetchEvent(id) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/event/' + id);
      dispatch(loaderActions.hideLoader());
      dispatch(receiveEvent(res.data));
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      messageActions.addErrorMessage({ header: 'Virhe haettaessa tapahtuman tietoja' });
    }
  };
}

export function fetchEvents() {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/events');
      dispatch(selectEvent(res.data[0]));
      dispatch(fetchEnrollments(res.data[0].id));
      dispatch(loaderActions.hideLoader());
      dispatch(receiveEvents(res.data));
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      messageActions.addErrorMessage({ header: 'Virhe haettaessa tapahtuman tietoja' });
    }
  };
}

export function submitEnrollment(enrollment) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPost('/enrollment', enrollment);
      if (!res.success) {
        messageActions.addWarningMessage({ header: res.message });
      }
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      messageActions.addErrorMessage({ header: 'Ilmoittautumisessa tapahtui virhe. Yritä myöhemmin uudelleen' }, 5000);
    }
  };
}


export function fetchEnrollments(eventId) {
  return async (dispatch) => {
    try {
      const res = await ajax.sendGet('/admin/enrollments/' + eventId);
      dispatch(receiveEnrollments(res.data));
    } catch (e) {
      messageActions.addErrorMessage({ header: e.message });
    }
  };
}

export function selectEvent(event) {
  return {
    type: actions.SELECT_EVENT,
    event,
  };
}

function receiveEnrollments(enrollments) {
  return {
    type: actions.RECEIVE_ENROLLMENTS,
    enrollments,
  };
}

function receiveEvent(event) {
  return {
    type: actions.RECEIVE_EVENT,
    event,
  };
}

function receiveEvents(events) {
  return {
    type: actions.RECEIVE_EVENTS,
    events,
  };
}
