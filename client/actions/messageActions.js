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
