export const actions = {
  AJAX_LOADING: 'AJAX_LOADING',
  AJAX_SUCCESS: 'AJAX_SUCCESS',
  AJAX_FAILURE: 'AJAX_FAILURE',
  AJAX_CLEAR_ERRORS: 'AJAX_CLEAR_ERRORS',
};

export function ajaxLoading(id) {
  return {
    type: actions.AJAX_LOADING,
    payload: id,
  };
}

export function ajaxSuccess(id) {
  return {
    type: actions.AJAX_SUCCESS,
    payload: id,
  };
}

export function ajaxFailure(id, error) {
  return {
    type: actions.AJAX_SUCCESS,
    id,
    error,
  };
}
