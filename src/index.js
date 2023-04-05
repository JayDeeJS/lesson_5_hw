import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './redux/reducer'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);