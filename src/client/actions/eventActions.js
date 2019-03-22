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
  SET_SUBMITTED: 'SET_SUBMITTED',
  OPEN_REGISTRATION: 'OPEN_REGISTRATION',
  CLOSE_REGISTRATION: 'CLOSE_REGISTRATION',
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
      dispatch(messageActions.clearMessages());
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPost('/enrollment', enrollment);
      if (!res.success) {
        dispatch(messageActions.addWarningMessage({ header: res.message }, 5000));
      } else {
        dispatch(setSubmitted());
        dispatch(clearEnrollment());
        dispatch(messageActions.addSuccessMessage({ header: 'Ilmoittautuminen hyväksytty. Saat vahvistussähköpostin ilmoittamaasi osoitteeseen.' }, 10000));
      }
      dispatch(loaderActions.hideLoader());
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      dispatch(messageActions.addErrorMessage({ header: 'Ilmoittautumisessa tapahtui virhe. Yritä myöhemmin uudelleen' }, 5000));
    }
  };
}

export function updateEnrollment(enrollment) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPut('/admin/enrollment/' + enrollment.id, enrollment);
      if (!res.success) {
        dispatch(messageActions.addWarningMessage({ header: res.message }, 5000));
      } else {
        dispatch(clearEnrollment());
        dispatch(fetchEnrollments(enrollment.eventId));
        dispatch(messageActions.addSuccessMessage({ header: 'Ilmoittautumisen tiedot päivitetty' }, 3000));
        dispatch(loaderActions.hideLoader());
      }
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      dispatch(messageActions.addErrorMessage({ header: e.message }));
    }
  };
}

export function deleteEnrollment(enrollment) {
  return async (dispatch) => {
    try {
      const res = await ajax.sendDelete('/admin/enrollment/' + enrollment.id);
      if (!res.success) {
        dispatch(messageActions.addWarningMessage({ header: res.message }, 5000));
      } else {
        dispatch(clearEnrollment());
        dispatch(fetchEnrollments(enrollment.eventId));
        dispatch(messageActions.addSuccessMessage({ header: 'Ilmoittautuminen poistettu' }, 3000));
        dispatch(loaderActions.hideLoader());
      }
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      dispatch(messageActions.addErrorMessage({ header: e.message }));
    }
  };
}


export function fetchEnrollments(eventId) {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet('/admin/enrollments/' + eventId);
      dispatch(loaderActions.hideLoader());
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

export function openRegistration(event) {
  return {
    type: actions.OPEN_REGISTRATION,
    event,
  };
}

export function closeRegistration(event) {
  return {
    type: actions.CLOSE_REGISTRATION,
    event,
  };
}

export function selectEnrollment(enrollment) {
  return {
    type: actions.SELECT_ENROLLMENT,
    enrollment,
  };
}


export function clearEnrollment() {
  return {
    type: actions.CLEAR_ENROLLMENT,
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


function setSubmitted() {
  return {
    type: actions.SET_SUBMITTED,
  };
}
