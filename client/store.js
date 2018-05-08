import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import feedback from './reducers/feedbackReducer';
import ajax from './reducers/ajaxReducer';
import messages from './reducers/messageReducer';

const reducers = combineReducers({
  form: formReducer,
  feedback,
  ajax,
  messages,
});

const middleWare = applyMiddleware(thunk);

// Redux devtools commented for now as it crashes prod
const store = createStore(
  reducers,
  composeWithDevTools(middleWare/* , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */),
);

export default store;
