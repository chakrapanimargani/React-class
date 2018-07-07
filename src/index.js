import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import Parent from './components/parent';
import SelectBox from './components/test';
import EventExample from './components/event';
import FormExample from './components/formExample';

import routes from "./routes";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
{routes}
  </Provider>
  , document.querySelector('.container'));
