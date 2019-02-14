import { actions } from 'actions/bookingManagementActions';

const initialState = {
  shows: [],
  selectedShow: {},
  bookings: [],
  selectedBooking: {
    id: 'asdf',
    normalCount: 1,
    discountCount: 2,
    specialPriceCount: 3,
    specialPrice: 10.00,
    ContactInfo: {
      fname: 'Iiris',
      lname: 'Hongisto',
      email: 'iiris@utu.fi',
      pnumber: '040000000',
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
    default:
      return state;
  }
};

export default bookingManagement;
