import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';
import ajax from 'utils/Ajax';

export const actions = {
  FETCH_USERS: 'FETCH_USERS',
  RECEIVE_USERS: 'RECEIVE_USERS',
  SELECT_USER: 'SELECT_USER',
  UPDATE_USER: 'UPDATE_USER',
  CLEAR_SELECTED_USER: 'CLEAR_SELECTED_USER',
  DELETE_USER: 'DELETE_USER',
  SAVE_USER: 'SAVE_USER',
  FETCH_ROLES: 'FETCH_ROLES',
  RECEIVE_ROLES: 'RECEIVE_ROLES',
};

export function fetchUsers() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_USERS));
      const res = await ajax.sendGet('/admin/w/kayttajat');
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_USERS));
      dispatch(receiveUsers(res.data));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_USERS, err));
      messageActions.addErrorMessage({ header: 'Käyttäjien haku epäonnistui' });
    }
  };
}

export function fetchRoles() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_ROLES));
      const res = await ajax.sendGet('/admin/roles');
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_ROLES));
      dispatch(receiveRoles(res.data));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_ROLES, err));
      messageActions.addErrorMessage({ header: 'Roolien haku epäonnistui: ', text: err.message });
    }
  };
}

export function selectUser(user) {
  return {
    type: actions.SELECT_USER,
    user,
  };
}

export function updateUser(user) {
  return {
    type: actions.UPDATE_USER,
    user,
  };
}

export function saveUser(user) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.SAVE_USER));
      await ajax.sendPost('/admin/w/kayttaja', user);
      dispatch(selectUser(user));
      dispatch(fetchUsers());
      dispatch(ajaxActions.ajaxSuccess(actions.SAVE_USER));
      dispatch(messageActions.addSuccessMessage({ header: 'Tiedot päivitetty!' }));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.SAVE_USER, err));
      messageActions.addErrorMessage({ header: 'Tietojen tallennus epäonnistui' });
    }
  };
}

export function addRoleToUser(userId, roleId) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.SAVE_USER));
      const res = await ajax.sendGet(`/admin/w/role/${userId}/${roleId}`);
      dispatch(selectUser(res.data));
      dispatch(ajaxActions.ajaxSuccess(actions.SAVE_USER));
      dispatch(messageActions.addSuccessMessage({ header: 'Tiedot päivitetty!' }));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.SAVE_USER, err));
      messageActions.addErrorMessage({ header: 'Tietojen tallennus epäonnistui' });
    }
  };
}

export function removeRoleFromUser(userId, roleId) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.SAVE_USER));
      const res = await ajax.sendDelete(`/admin/w/role/${userId}/${roleId}`);
      dispatch(selectUser(res.data));
      dispatch(ajaxActions.ajaxSuccess(actions.SAVE_USER));
      dispatch(messageActions.addSuccessMessage({ header: 'Tiedot päivitetty!' }));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.SAVE_USER, err));
      messageActions.addErrorMessage({ header: 'Tietojen tallennus epäonnistui' });
    }
  };
}

export function deleteUser(user) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.DELETE_USER));
      await ajax.sendDelete('/admin/w/kayttaja/' + user._id);
      dispatch(clearUser());
      dispatch(fetchUsers());
      dispatch(ajaxActions.ajaxSuccess(actions.DELETE_USER));
      dispatch(messageActions.addSuccessMessage({ header: 'Käyttäjä poistettu!' }));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.DELETE_USER, err));
      messageActions.addErrorMessage({ header: 'Poistaminen epäonnistui' });
    }
  };
}

export function clearUser() {
  return {
    type: actions.CLEAR_SELECTED_USER,
  };
}

function receiveUsers(users) {
  return {
    type: actions.RECEIVE_USERS,
    users,
  };
}

function receiveRoles(roles) {
  return {
    type: actions.RECEIVE_ROLES,
    roles,
  };
}
