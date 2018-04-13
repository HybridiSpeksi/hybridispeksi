import { actions } from '../actions/feedbackActions';

const initialState = [];

const feedback = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECIEVE_FEEDBACK:
      return [
        ...state,
        action.feedback,
      ];
    default:
      return state;
  }
};

export default feedback;
