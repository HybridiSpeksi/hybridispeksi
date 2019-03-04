import { actions } from 'actions/eventActions';

const initialState = {
  enrollments: [],
  enrollment: {
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
    name: '',
    limit: '',
    registrationOpen: false,
    date: '',
  },
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
    default:
      return state;
  }
};

export default event;
