import ajax from '../Utils/Ajax';
import constants from '../Utils/constants';
import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';

export const actions = {
  RECIEVE_FEEDBACK: 'RECEIVE_FEEDBACK',
};

export function sendFeedback(feedback) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(constants.SEND_FEEDBACK));
      const res = await ajax.sendPost('/palaute', feedback);
      dispatch(ajaxActions.ajaxSuccess(constants.SEND_FEEDBACK));
      if (!res.success) {
        dispatch(messageActions.addMessage({ type: constants.MESSAGE_WARNING, text: res.data }));
      } else {
        dispatch(messageActions.addMessage({
          type: constants.MESSAGE_SUCCESS,
          text: 'Kiitos palautteesta!',
        }));
      }
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(constants.SEND_FEEDBACK, err));
      dispatch(messageActions.addMessage({
        type: constants.MESSAGE_ERROR,
        text: 'Virhe palautteen lähettämisessä. Yritä myöhemmin uudelleen.',
      }));
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

export function sendVote(vote) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading());
      const res = await ajax.sendPost('/vuodenspeksaaja', vote);
      dispatch(ajaxActions.ajaxSuccess());
      if (!res.success) {
        dispatch(messageActions.addMessage({ type: constants.MESSAGE_WARNING, text: res.data }));
      } else {
        dispatch(messageActions.addMessage({
          type: constants.MESSAGE_SUCCESS,
          text: 'Kiitos ehdotuksesta!',
        }));
      }
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(err));
      dispatch(messageActions.addMessage({
        type: constants.MESSAGE_ERROR,
        text: 'Virhe ehdotuksen lähettämisessä. Yritä myöhemmin uudelleen.',
      }));
      console.log(err);
    }
  };
}

function receiveFeedback(feedback) {
  return {
    type: actions.RECIEVE_FEEDBACK,
    feedback,
  };
}
