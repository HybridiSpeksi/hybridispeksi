import { actions } from '../actions/productionActions';

const initialState = {
  members: [],
  searchObject: {
    text: '',
    tehtava: '',
    jarjesto: '',
  },
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
    case actions.UPDATE_SEARCH_OBJECT:
      return {
        ...state,
        searchObject: { ...action.searchObject },
      };
    default:
      return state;
  }
};

export default production;

const hasMemberUpdated = (originalMember, updatedMember) => {
  // TODO
};
