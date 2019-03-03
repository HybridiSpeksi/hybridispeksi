import * as messageActions from './messageActions';
import * as loaderActions from './loaderActions';
import ajax from '../Utils/Ajax';

export const actions = {
  RECEIVE_ENROLLMENTS: 'RECEIVE_ENROLLMENTS',
  SELECT_ENROLLMENT: 'SELECT_ENROLLMENT',
  CLEAR_ENROLLMENT: 'CLEAR_ENROLLMENT',
  RECEIVE_EVENT: 'RECEIVE_EVENT',
};


export function fetchEvent(id) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/event/' + id);
      dispatch(loaderActions.hideLoader());
      dispatch(recieveEvent(res.data));
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
      const res = await ajax.sendGet('/enrollments/' + eventId);
      dispatch(receiveEnrollments(res.data));
    } catch (e) {
      messageActions.addErrorMessage({ header: e.message });
    }
  };
}

function receiveEnrollments(enrollments) {
  return {
    type: actions.RECEIVE_ENROLLMENTS,
    enrollments,
  };
}

function recieveEvent(event) {
  return {
    type: actions.RECEIVE_EVENT,
    event,
  };
}
