import { combineReducers } from 'redux';

// Reducers //

import userReducer from './userReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer
});

export default rootReducer;