import { actions } from '../actions/ajaxActions';

const initialState = {
  loading: false,
  ongoingRequests: [],
  errors: [],
  warnings: [],
};

const ajax = (state = initialState, action) => {
  switch (action.type) {
    case actions.AJAX_LOADING:
      return {
        ...state,
        loading: true,
        ongoingRequests: [...state.ongoingRequests, action.payload],
      };
    case actions.AJAX_SUCCESS:
      return {
        ...state,
        ongoingRequests: [...state.ongoingRequests.filter(requestId => requestId !== action.payload)],
        loading: state.ongoingRequests.length > 0,
      };
    case actions.AJAX_FAILURE:
      return {
        ...state,
        ongoingRequests: [...state.ongoingRequests.filter(requestId => requestId !== action.id)],
        loading: state.ongoingRequests.length > 0,
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
