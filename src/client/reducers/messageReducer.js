import { actions } from '../actions/messageActions';

const initialState = [];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return [
        ...state,
        { ...action.message, fading: false },
      ];
    case actions.CLEAR_MESSAGES:
      return [];
    case actions.CLOSE_MESSAGE:
      return [
        ...state.filter(message => message.id !== action.id),
      ];
    case actions.FADE_OUT:
      return [
        ...state.map((message) => {
          if (message.id === action.id) {
            return { ...message, fading: true };
          }
          return message;
        }),
      ];
    default:
      return state;
  }
};

export default messages;
