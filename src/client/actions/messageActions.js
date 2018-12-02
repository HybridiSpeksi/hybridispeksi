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

export function addSuccessMessage(m) {
  const message = {
    ...m,
    type: constants.MESSAGE_SUCCESS,
  };
  console.log(message);
  return {
    type: actions.ADD_MESSAGE,
    message,
  };
}

export function addWarningMessage(m) {
  const message = {
    ...m,
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
    type: constants.MESSAGE_ERROR,
  };
  console.log(message);
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
