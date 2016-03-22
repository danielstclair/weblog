import '../styles/main.scss';

// boilerplate imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleare = applyMiddleware(promise)(createStore);

// Must refactor once using redux

// ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render(
  <Provider store={createStoreWithMiddleare(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
