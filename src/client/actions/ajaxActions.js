export const actions = {
  AJAX_LOADING: 'AJAX_LOADING',
  AJAX_SUCCESS: 'AJAX_SUCCESS',
  AJAX_FAILURE: 'AJAX_FAILURE',
  AJAX_CLEAR_ERRORS: 'AJAX_CLEAR_ERRORS',
};

export function ajaxLoading() {
  return {
    type: actions.AJAX_LOADING,
  };
}

export function ajaxSuccess() {
  return {
    type: actions.AJAX_SUCCESS,
  };
}

export function ajaxFailure() {
  return {
    type: actions.AJAX_SUCCESS,
  };
}
