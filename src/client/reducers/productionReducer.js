import { actions } from '../actions/productionActions';

const initialState = {
  members: [],
  filteredMembers: [],
  selectedMember: {
    fname: '',
    lname: '',
    email: '',
    pnumber: '',
    tehtavat: [],
    tuotannonMuistiinpanot: '',
    updated: false,
  },
};

const production = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_PRODUCTION:
      return {
        ...state,
        members: [...action.production],
        filteredMembers: [...action.production],
      };
    case actions.SELECT_MEMBER:
      return {
        ...state,
        selectedMember: { ...action.member, updated: false },
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

export default production;

const hasMemberUpdated = (originalMember, updatedMember) => {
  // TODO
};
