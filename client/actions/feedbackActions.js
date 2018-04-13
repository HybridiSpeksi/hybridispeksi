import ajax from '../Utils/Ajax';
import * as ajaxActions from './ajaxActions';

export const actions = {
  RECIEVE_FEEDBACK: 'RECEIVE_FEEDBACK',
};

export function sendFeedback(feedback) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading());
      await ajax.sendPost('/palaute', feedback);
      dispatch(ajaxActions.ajaxSuccess());
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchFeedback() {
  return async (dispatch) => {
    const feedback = await ajax.sendGet();
    dispatch(receiveFeedback(feedback));
  };
}

function receiveFeedback(feedback) {
  return {
    type: actions.RECIEVE_FEEDBACK,
    feedback,
  };
}
