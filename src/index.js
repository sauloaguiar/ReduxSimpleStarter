import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // Creates the component wrapped in the store  
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  // Query where to put the component on the page
  , document.querySelector('.container'));
