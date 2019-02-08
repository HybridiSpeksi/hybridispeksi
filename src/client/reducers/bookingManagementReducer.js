import { actions } from 'actions/bookingManagementActions';

const initialState = {
  shows: [],

};

const bookingManagement = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_SHOWS:
      return {
        ...state,
        shows: [...action.shows],
      };
    default:
      return state;
  }
};

export default bookingManagement;
