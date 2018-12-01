import * as ajaxActions from './ajaxActions';

import ajax from '../Utils/Ajax';

export const actions = {
  FETCH_OHJAUSTIETO: 'FETCH_OHJAUSTIETO',
  RECEIVE_OHJAUSTIETO: 'RECEIVE_OHJAUSTIETO',
};

/**
 * @param {ohjaustietoKey: String}
 * fetch ohjaustieto by it's key
 */
export function fetchOhjaustieto(ohjaustietoKey) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_OHJAUSTIETO));
      const res = await ajax.sendGet('/' + ohjaustietoKey);
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_OHJAUSTIETO));
      dispatch(receiveOhaustieto(res, ohjaustietoKey));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_OHJAUSTIETO, err));
    }
  };
}


export function receiveOhaustieto(res, key) {
  return {
    type: actions.RECEIVE_OHJAUSTIETO,
    key,
    payload: res.data,
  };
}
