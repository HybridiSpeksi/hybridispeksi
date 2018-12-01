import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import feedback from './reducers/feedbackReducer';
import ajax from './reducers/ajaxReducer';
import messages from './reducers/messageReducer';
import production from './reducers/productionReducer';
import ohjaustieto from './reducers/ohjaustietoReducer';

const reducers = combineReducers({
  form: formReducer,
  feedback,
  ajax,
  messages,
  production,
  ohjaustieto,
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
