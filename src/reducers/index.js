import { combineReducers } from 'redux';

// Reducers //

import userReducer from './userReducer';
import newsReducer from './newsReducer';
import authorsReducer from './authorsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  authors: authorsReducer
});

export default rootReducer;