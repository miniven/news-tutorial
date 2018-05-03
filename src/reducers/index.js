import { combineReducers } from 'redux';

// Reducers //

import authReducer from './authReducer';
import newsReducer from './newsReducer';
import authorsReducer from './authorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  authors: authorsReducer,
});

export default rootReducer;