import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import logger from 'redux-logger';
import Root from './components/Root';

// react-router stuff
import { routerMiddleware, ConnectedRouter, BrowserRouter as Router, Route } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// react-form stuff
import { reducer as formReducer } from 'redux-form';

const history = createHistory();

const enhancers = [];
const middleware = [
  thunk,
  logger,
  routerMiddleware(history)
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

// combine reducers
const rootReducer = combineReducers({
  reducer,
  form: formReducer
});

//const store = createStore(reducer, composedEnhancers);
const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
  <Root store={store} />,
document.getElementById('root'));
