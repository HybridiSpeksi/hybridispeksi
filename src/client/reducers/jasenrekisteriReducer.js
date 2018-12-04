import { actions } from '../actions/jasenrekisteriActions';

const initialState = {
  members: [],
  selectedMember: {
    fname: '',
    sname: '',
    email: '',
    hometown: '',
    approved: false,
    memberOfTyy: false,
  },
};

const jasenrekisteri = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_MEMBERS:
      return {
        ...state,
        members: [...action.members],
      };
    case actions.SELECT_MEMBER:
      return {
        ...state,
        selectedMember: action.member,
      };
    case actions.CLEAR_SELECTED_MEMBER:
      return {
        ...state,
        selectedMember: { ...initialState.selectedMember },
      };
    case actions.UPDATE_SELECTED_MEMBER:
      return {
        ...state,
        selectedMember: { ...action.member, updated: true },
      };
    default:
      return state;
  }
};

export default jasenrekisteri;
