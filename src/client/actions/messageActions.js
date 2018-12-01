import constants from '../Utils/constants';

export const actions = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
};

export function addMessage(message) {
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

export function addSuccessMessage(message) {
  const _message = {
    ...message,
    type: constants.MESSAGE_SUCCESS,
  };
  return {
    type: actions.ADD_MESSAGE,
    _message,
  };
}

export function addWarningMessage(message) {
  const _message = {
    ...message,
    type: constants.MESSAGE_WARNING,
  };
  return {
    type: actions.ADD_MESSAGE,
    _message,
  };
}

export function addErrorMessage(message) {
  const _message = {
    ...message,
    type: constants.MESSAGE_ERROR,
  };
  return {
    type: actions.ADD_MESSAGE,
    _message,
  };
}

export function clearMessages() {
  return {
    type: actions.CLEAR_MESSAGES,
  };
}
