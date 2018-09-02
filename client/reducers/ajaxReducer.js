import { actions } from '../actions/ajaxActions';

const initialState = {
  loading: false,
  ready: true,
  errors: [],
  warnings: [],
};

const ajax = (state = initialState, action) => {
  switch (action.type) {
    case actions.AJAX_LOADING:
      return {
        ...state,
        loading: true,
        ready: false,
      };
    case actions.AJAX_SUCCESS:
      return {
        ...state,
        loading: false,
        ready: true,
      };
    case actions.AJAX_FAILURE:
      return {
        ...state,
        loading: false,
        ready: true,
        errors: [...state.errors, action.error],
      };
    case actions.AJAX_CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};

export default ajax;
