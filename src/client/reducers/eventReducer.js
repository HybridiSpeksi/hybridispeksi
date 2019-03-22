import { actions } from 'actions/eventActions';

const initialState = {
  enrollments: [],
  enrollment: {
    id: '',
    ContactInfo: {
      fname: '',
      lname: '',
      email: '',
      pnumber: '',
    },
    presentGreeting: false,
    greetingOrganization: '',
    avec: '',
    partyExpectation: '',
    menu: 'Liha',
    diet: '',
    alcohol: true,
    sillis: false,
    memberOfSpeksi: false,
    paid: false,
    additional: '',
  },
  events: [],
  event: {
    id: '',
    name: '',
    limit: '',
    registrationOpen: false,
    date: '',
  },
  submitted: false,
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_ENROLLMENTS:
      return {
        ...state,
        enrollments: [...action.enrollments],
      };
    case actions.SELECT_ENROLLMENT:
      return {
        ...state,
        enrollment: { ...action.enrollment },
      };
    case actions.SET_SUBMITTED:
      return {
        ...state,
        submitted: true,
      };
    case actions.CLEAR_ENROLLMENT:
      return {
        ...state,
        enrollment: initialState.enrollment,
      };
    case actions.RECEIVE_EVENTS:
      return {
        ...state,
        events: [...action.events],
      };
    case actions.RECEIVE_EVENT:
      return {
        ...state,
        event: { ...action.event },
      };
    case actions.SELECT_EVENT:
      return {
        ...state,
        event: { ...action.event },
      };
    case actions.OPEN_REGISTRATION:
      return {
        ...state,
        event: { registrationOpen: true },
      };
    case actions.CLOSE_REGISTRATION:
      return {
        ...state,
        event: { registrationOpen: false },
      };
    default:
      return state;
  }
};

export default event;
