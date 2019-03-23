import ajax from '../Utils/Ajax';
import * as loaderActions from './loaderActions';
import * as messageActions from './messageActions';

export const actions = {
  RECIEVE_FEEDBACK: 'RECEIVE_FEEDBACK',
  SET_SUBMITTED: 'SET_SUBMITTED',
};

export function submitFeedback(feedback) {
  return async (dispatch) => {
    try {
      dispatch(messageActions.clearMessages());
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendPost('/palaute', feedback);
      if (!res.success) {
        dispatch(messageActions.addWarningMessage({ header: res.message }, 5000));
      } else {
        dispatch(setSubmitted());
        dispatch(messageActions.addSuccessMessage({ header: 'Kiitos palautteestasi!' }, 10000));
      }
      dispatch(loaderActions.hideLoader());
    } catch (err) {
      dispatch(loaderActions.hideLoader());
      dispatch(messageActions.addErrorMessage({ header: 'Palautteen lähetyksessä tapahtui virhe. Yritä myöhemmin uudelleen' }, 5000));
      console.log(err);
    }
  };
}

export function fetchFeedback() {
  return async (dispatch) => {
    try {
      dispatch(loaderActions.showLoader());
      const res = await ajax.sendGet();
      dispatch(receiveFeedback(res));
    } catch (e) {
      dispatch(loaderActions.hideLoader());
      messageActions.addErrorMessage({ header: 'Virhe haettaessa palautteita.' });
    }
  };
}

function receiveFeedback(feedback) {
  return {
    type: actions.RECIEVE_FEEDBACK,
    feedback,
  };
}

function setSubmitted() {
  return {
    type: actions.SET_SUBMITTED,
  };
}
