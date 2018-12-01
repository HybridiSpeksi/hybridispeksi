import { actions } from '../actions/ohjaustietoActions';

const initialState = {
  tehtavat: [],
  jarjestot: [],
};

const ohjaustieto = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_OHJAUSTIETO:
      return {
        ...state,
        [action.key]: action.payload,
      };
    default:
      return state;
  }
};

export default ohjaustieto;
