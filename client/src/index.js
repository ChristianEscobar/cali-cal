import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(
  logger,
  thunk
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
