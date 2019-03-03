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
    menu: '',
    diet: '',
    alcohol: true,
    sillis: true,
    memberOfSpeksi: true,
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
    case actions.RECIEVE_ENROLLMENTS:
      return {
        ...state,
        enrollments: [...action.enrollments],
      };
    case actions.SELECT_ENROLLMENT:
      return {
        ...state,
        selectedEnrollment: { ...action.enrollment },
      };
    case actions.CLEAR_SELECTED_ENROLLMENT:
      return {
        ...state,
        selectedEnrollment: initialState.selectedEnrollment,
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
