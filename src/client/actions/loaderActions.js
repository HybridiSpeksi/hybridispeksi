
export const actions = {
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
};

export function showLoader() {
  return {
    type: actions.SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: actions.HIDE_LOADER,
  };
}
