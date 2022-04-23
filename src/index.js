import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers/reducer';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './style.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
