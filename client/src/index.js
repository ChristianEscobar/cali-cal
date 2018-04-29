import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// redux stuff
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import logger from 'redux-logger';
import Root from './components/Root';

// react-router stuff
// import { routerMiddleware, ConnectedRouter, BrowserRouter as Router, Route } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

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
});

//const store = createStore(reducer, composedEnhancers);
const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
  <Root store={store} />,
document.getElementById('root'));
