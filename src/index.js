import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension';

// Styles //

import 'reset-css';
import 'flexboxgrid';
import './index.css';

// Components //

import App from './components/App/App';

// Middlewares //

import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
