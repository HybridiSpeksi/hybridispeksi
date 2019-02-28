import cuid from 'cuid';
import constants from '../Utils/constants';

export const actions = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
  CLOSE_MESSAGE: 'CLOSE_MESSAGE',
  FADE_OUT: 'FADE_OUT',
};

// DEPRECATION: don't use this anymore.
export function addMessage(message) {
  console.warn('DEPRECATION: old message action type');
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

export function addSuccessMessage(m, timeout) {
  return (dispatch) => {
    const id = cuid();
    const message = {
      ...m,
      id,
      type: constants.MESSAGE_SUCCESS,
    };
    dispatch(messageAction(message));
    if (timeout) {
      setTimeout(() => {
        dispatch(startFadeOut(id));
      }, timeout);
      setTimeout(() => {
        dispatch(closeMessage(id));
      }, timeout + 300);
    }
  };
}

export function addWarningMessage(m, timeout) {
  return (dispatch) => {
    const id = cuid();
    const message = {
      ...m,
      id,
      type: constants.MESSAGE_WARNING,
    };
    dispatch(messageAction(message));
    if (timeout) {
      setTimeout(() => {
        dispatch(startFadeOut(id));
      }, timeout);
      setTimeout(() => {
        dispatch(closeMessage(id));
      }, timeout + 300);
    }
  };
}

export function addErrorMessage(m, timeout) {
  return (dispatch) => {
    const id = cuid();
    const message = {
      ...m,
      id,
      type: constants.MESSAGE_ERROR,
    };
    dispatch(messageAction(message));
    if (timeout) {
      setTimeout(() => {
        dispatch(startFadeOut(id));
      }, timeout);
      setTimeout(() => {
        dispatch(closeMessage(id));
      }, timeout + 300);
    }
  };
}

export function clearMessages() {
  return {
    type: actions.CLEAR_MESSAGES,
  };
}

export function closeMessage(id) {
  return {
    type: actions.CLOSE_MESSAGE,
    id,
  };
}

function messageAction(message) {
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

function startFadeOut(id) {
  return {
    type: actions.FADE_OUT,
    id,
  };
}
