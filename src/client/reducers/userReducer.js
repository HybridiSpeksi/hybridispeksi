import { actions } from 'actions/userActions';

const initialState = {
  users: [],
  roles: [],
  selectedUser: {
    id: '',
    ContactInfo: {
      fname: '',
      lname: '',
      email: '',
    },
    Roles: [],
    updated: false,
  },

};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case actions.SELECT_USER:
      return {
        ...state,
        selectedUser: { ...action.user, updated: false },
      };
    case actions.UPDATE_USER:
      return {
        ...state,
        selectedUser: { ...action.user, updated: true },
      };
    case actions.CLEAR_SELECTED_USER:
      return {
        ...state,
        selectedUser: { ...initialState.selectedUser },
      };
    case actions.RECEIVE_ROLES:
      return {
        ...state,
        roles: [...action.roles],
      };
    default:
      return state;
  }
};

export default user;
