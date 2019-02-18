import { actions } from 'actions/bookingManagementActions';

const initialState = {
  shows: [],
  selectedShow: {
    id: '',
    limit: 135,
    nameLong: '',
    nameShort: '',
    date: '',
  },
  bookings: [],
  selectedBooking: {
    id: '',
    normalCount: 0,
    discountCount: 0,
    specialPriceCount: 0,
    specialPrice: 10.00,
    showId: '',
    ContactInfo: {
      fname: '',
      lname: '',
      email: '',
      pnumber: '',
    },
  },
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
    case actions.SELECT_BOOKING:
      return {
        ...state,
        selectedBooking: { ...action.booking },
      };
    case actions.CLEAR_SELECTED_SHOW:
      return {
        ...state,
        selectedShow: initialState.selectedShow,
      };
    case actions.CLEAR_SELECTED_BOOKING:
      return {
        ...state,
        selectedBooking: initialState.selectedBooking,
      };
    default:
      return state;
  }
};

export default bookingManagement;
