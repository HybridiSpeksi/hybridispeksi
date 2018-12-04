import * as ajaxActions from './ajaxActions';
import * as messageActions from './messageActions';
import ajax from '../Utils/Ajax';

export const actions = {
  FETCH_MEMBERS: 'FETCH_MEMBERS',
  RECEIVE_MEMBERS: 'RECEIVE_MEMBERS',
  SELECT_MEMBER: 'SELECT_MEMBER',
  CLEAR_SELECTED_MEMBER: 'CLEAR_SELECTED_MEMBER',
  UPDATE_SELECTED_MEMBER: 'UPDATE_SELECTED_MEMBER',
  APPROVE_MEMBER: 'APPROVE_MEMBER',
};

export function fetchMembers() {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.FETCH_MEMBERS));
      const res = await ajax.sendGet('/admin/h/jasenrekisteri');
      dispatch(ajaxActions.ajaxSuccess(actions.FETCH_MEMBERS));
      dispatch(receiveMembers(res.data));
    } catch (err) {
      dispatch(ajaxActions.ajaxFailure(actions.FETCH_MEMBERS, err));
      dispatch(messageActions.addErrorMessage({ header: 'Virhe haettaessa jäsentietoja.', text: 'Ota yhteys webmasteriin' }));
    }
  };
}

export function selectMember(member) {
  return {
    type: actions.SELECT_MEMBER,
    member,
  };
}

export function clearSelectedMember() {
  return {
    type: actions.CLEAR_SELECTED_MEMBER,
  };
}

export function updateSelectedMember(member) {
  return {
    type: actions.UPDATE_SELECTED_MEMBER,
    member,
  };
}

export function saveMember(member) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.SAVE_SELECTED_MEMBER));
      await ajax.sendPost('/admin/h/jasenrekisteri', member);
      dispatch(selectMember(member));
      dispatch(ajaxActions.ajaxSuccess(actions.SAVE_SELECTED_MEMBER));
      dispatch(fetchMembers());
      dispatch(messageActions.addSuccessMessage({ header: 'Tiedot päivitetty!' }));
    } catch (err) {
      dispatch(messageActions.addErrorMessage({ header: 'Tietojen päivitys epäonnistui!' }));
      console.log(err);
      dispatch(ajaxActions.ajaxFailure(actions.SAVE_SELECTED_MEMBER, err));
    }
  };
}

export function approveMember(member) {
  return async (dispatch) => {
    try {
      dispatch(ajaxActions.ajaxLoading(actions.APPROVE_MEMBER));
      await ajax.sendGet('/admin/h/hyvaksyJasen/' + member._id);
      dispatch(ajaxActions.ajaxSuccess(actions.APPROVE_MEMBER));
      dispatch(fetchMembers());
      dispatch(messageActions.addSuccessMessage({ header: 'Jäsen hyväksytty!' }));
    } catch (err) {
      dispatch(messageActions.addErrorMessage({ header: 'Tietojen päivitys epäonnistui!' }));
      console.log(err);
      dispatch(ajaxActions.ajaxFailure(actions.APPROVE_MEMBER, err));
    }
  };
}

function receiveMembers(members) {
  return {
    type: actions.RECEIVE_MEMBERS,
    members,
  };
}
