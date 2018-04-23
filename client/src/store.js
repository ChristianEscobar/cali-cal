/*
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

// react-router stuff
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const enhancers = [];
const middleware = [routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  enhancers
);

const store = createStore(
  reducer,
  composedEnhancers
);

export default store;
*/