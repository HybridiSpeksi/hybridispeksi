import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';

import ajax from '../Utils/Ajax';

export const actions = {
  FETCH_SHOWS: 'FETCH_SHOWS',
  RECEIVE_SHOWS: 'RECEIVE_SHOWS',
  SELECT_SHOW: 'SELECT_SHOW',
};

export function fetchShows() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_SHOWS));
      const res = await ajax.sendGet('/shows');
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_SHOWS));
      dispatch(receiveShows(res));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_SHOWS));
      console.log(err);
      dispatch(messageActions.addErrorMessage({ header: 'Virhe haettaessa esityksiä' }));
    }
  };
}

export function selectShow(show) {
  return {
    type: actions.SELECT_SHOW,
    show,
  };
}

function receiveShows(shows) {
  return {
    type: actions.RECEIVE_SHOWS,
    shows,
  };
}
