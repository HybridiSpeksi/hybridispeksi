import { actions } from 'actions/bookingManagementActions';

const initialState = {
  shows: [],
  selectedShow: {},
  bookings: [],
};

const bookingManagement = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_SHOWS:
      return {
        ...state,
        shows: [...action.shows],
      };
    case actions.RECEIVE_BOOKINGS:
      return {
        ...state,
        bookings: [...action.bookings],
      };
    case actions.SELECT_SHOW:
      return {
        ...state,
        selectedShow: { ...action.show },
      };
    default:
      return state;
  }
};

export default bookingManagement;
