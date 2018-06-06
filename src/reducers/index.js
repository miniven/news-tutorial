import { combineReducers } from 'redux';

// Reducers //

import authReducer from './authReducer';
import userReducer from './userReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  news: newsReducer,
});

export default rootReducer;