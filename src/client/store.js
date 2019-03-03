import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import feedback from './reducers/feedbackReducer';
import ajax from './reducers/ajaxReducer';
import messages from './reducers/messageReducer';
import production from './reducers/productionReducer';
import ohjaustieto from './reducers/ohjaustietoReducer';
import jasenrekisteri from './reducers/jasenrekisteriReducer';
import user from './reducers/userReducer';
import bookingManagement from './reducers/bookingReducer';
import loader from './reducers/loaderReducer';
import event from './reducers/eventReducer';

const reducers = combineReducers({
  form: formReducer,
  feedback,
  ajax,
  messages,
  production,
  ohjaustieto,
  jasenrekisteri,
  user,
  bookingManagement,
  loader,
  event,
});

const middleWare = applyMiddleware(thunk);
const enhancer = compose(
  middleWare,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(
  reducers,
  enhancer,
);

export default store;
