import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';

// Styles //

import 'reset-css';
import 'flexboxgrid';
import './index.css';

// Components //

import App from './components/App/App';

// Actions //

import { setNews } from './actions/news';

const store = createStore(rootReducer);
const initialNews = [
  {
    id: 1,
    title: 'Важная новость',
    author: 'Benjamin',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aspernatur vero veniam magnam voluptatibus ipsum, similique, accusantium alias, voluptates totam repudiandae odio ipsa perspiciatis placeat velit asperiores provident iure nostrum.'
  },
  {
    id: 2,
    title: 'Другая новость',
    author: 'Benjamin',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aspernatur vero veniam magnam voluptatibus ipsum, similique, accusantium alias, voluptates totam repudiandae odio ipsa perspiciatis placeat velit asperiores provident iure nostrum.'
  }
];

store.dispatch(setNews(initialNews));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
