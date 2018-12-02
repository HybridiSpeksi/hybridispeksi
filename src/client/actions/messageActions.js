import cuid from 'cuid';
import constants from '../Utils/constants';

export const actions = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
  CLOSE_MESSAGE: 'CLOSE_MESSAGE',
};

export function addMessage(message) {
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

export function addSuccessMessage(m) {
  const message = {
    ...m,
    id: cuid(),
    type: constants.MESSAGE_SUCCESS,
  };
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

export function addWarningMessage(m) {
  const message = {
    ...m,
    id: cuid(),
    type: constants.MESSAGE_WARNING,
  };
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

export function addErrorMessage(m) {
  const message = {
    ...m,
    id: cuid(),
    type: constants.MESSAGE_ERROR,
  };
  return {
    type: actions.ADD_MESSAGE,
    message,
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
