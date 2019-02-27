import { actions } from 'actions/bookingActions';

const initialState = {
  prices: {
    normalPrice: 16,
    discountPrice: 14,
    supportPrice: 25,
  },
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
    specialPrice: 25.00,
    showId: '',
    paid: false,
    additionalInfo: '',
    paymentMethodCode: 100,
    ContactInfo: {
      fname: '',
      lname: '',
      email: '',
      pnumber: '',
    },
  },
  paymentMethods: [{ name: 'asdfa', value: 'asrgaeraerg', code: 100 }],
  ticketSaleOpen: false,
  ticketSaleMessage: '',
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
    case actions.RECEIVE_PAYMENT_METHODS:
      return {
        ...state,
        paymentMethods: [...action.paymentMethods],
      };
    case actions.RECEIVE_TICKETSALEOPEN:
      return {
        ...state,
        ticketSaleOpen: action.ticketSaleOpen,
      };
    case actions.RECEIVE_TICKETSALEMESSAGE:
      return {
        ...state,
        ticketSaleMessage: action.ticketSaleMessage,
      };
    default:
      return state;
  }
};

export default bookingManagement;
