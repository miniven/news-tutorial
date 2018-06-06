import { combineReducers } from 'redux';

// Reducers //

import authReducer from './authReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
});

export default rootReducer;