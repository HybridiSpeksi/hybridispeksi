import { actions } from '../actions/loaderActions';

const initialState = {
  loading: false,
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case actions.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loader;
