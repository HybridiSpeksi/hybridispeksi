import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';
import constants from '../Utils/constants';
import ajax from '../Utils/Ajax';

export const actions = {
  FETCH_PRODUCTION: 'FETCH_PRODUCTION',
  RECEIVE_PRODUCTION: 'RECEIVE_PRODUCTION',
  FETCH_OHJAUSTIETO: 'FETCH_OHJAUSTIETO',
  SELECT_MEMBER: 'SELECT_MEMBER',
  CLEAR_SELECTED_MEMBER: 'CLEAR_SELECTED_MEMBER',
  UPDATE_SELECTED_PRODUCTION_MEMBER: 'UPDATE_SELECTED_PRODUCTION_MEMBER',
  SAVE_SELECTED_MEMBER: 'SAVE_SELECTED_MEMBER',
  UPDATE_SEARCH_OBJECT: 'UPDATE_SEARCH_OBJECT',
  DELETE_PRODUCTION_MEMBER: 'DELETE_PRODUCTION_MEMBER',
};

export function fetchProduction() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(constants.PRODUCTION_REQUEST));
      const res = await ajax.sendGet('/admin/produktionjasen/2018');
      dispatch(ajaxActions.ajaxSuccess(constants.PRODUCTION_REQUEST));
      dispatch(recieveProduction(res));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(constants.PRODUCTION_REQUEST, err));
      messageActions.addErrorMessage({ header: 'Virhe haettaessa tietoja.', text: 'Ota yhteys webmasteriin' });
    }
  };
}

export function selectMember(member) {
  return {
    type: actions.SELECT_MEMBER,
    member,
  };
}

export function updateSelecteProductiondMember(member) {
  return {
    type: actions.UPDATE_SELECTED_PRODUCTION_MEMBER,
    member,
  };
}

export function saveSelectedMember(member) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.SAVE_SELECTED_MEMBER));
      await ajax.sendPost('/admin/produktionjasen', member);
      dispatch(selectMember(member));
      dispatch(ajaxActions.ajaxSuccess(actions.SAVE_SELECTED_MEMBER));
      dispatch(fetchProduction());
      dispatch(messageActions.addSuccessMessage({ header: 'Tiedot päivitetty!' }));
    } catch (err) {
      dispatch(messageActions.addErrorMessage({ header: 'Tietojen päivitys epäonnistui!' }));
      console.log(err);
      dispatch(ajaxActions.ajaxFailure(constants.SAVE_SELECTED_MEMBER, err));
    }
  };
}

export function clearSelectedMember() {
  return {
    type: actions.CLEAR_SELECTED_MEMBER,
  };
}

export function deleteProductionMember(member) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.DELETE_PRODUCTION_MEMBER));
      await ajax.sendDelete('/admin/w/produktionjasen/' + member._id);
      dispatch(ajaxActions.ajaxSuccess(actions.DELETE_PRODUCTION_MEMBER));
      dispatch(fetchProduction());
      dispatch(messageActions.addSuccessMessage({ header: 'Jäsen poistettu rekisteristä!' }));
    } catch (err) {
      dispatch(messageActions.addErrorMessage({ header: 'Poisto epäonnistui!' }));
      console.log(err);
      dispatch(ajaxActions.ajaxFailure(actions.DELETE_PRODUCTION_MEMBER, err));
    }
  }
}

/**
 *
 * @param {text: String, tehtava: String, jarjesto: String} searchObject
 */
export function updateSearchObject(searchObject) {
  return {
    type: actions.UPDATE_SEARCH_OBJECT,
    searchObject,
  };
}

function recieveProduction(production) {
  return {
    type: actions.RECEIVE_PRODUCTION,
    production,
  };
}
