import { actions } from '../actions/messageActions';

const initialState = [];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return [
        ...state,
        action.message,
      ];
    case actions.CLEAR_MESSAGES:
      return [];
    case actions.CLOSE_MESSAGE:
      return [
        ...state.filter(message => message.id !== action.id),
      ];
    default:
      return state;
  }
};

export default messages;
