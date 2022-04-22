import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers/reducer';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import './style.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
