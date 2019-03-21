import { actions } from '../actions/feedbackActions';

const initialState = {
  submitted: false,
};

const feedback = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECIEVE_FEEDBACK:
      return [
        ...state,
        action.feedback,
      ];
    case actions.SET_SUBMITTED:
      return {
        ...state,
        submitted: true,
      };
    default:
      return state;
  }
};


export default feedback;
