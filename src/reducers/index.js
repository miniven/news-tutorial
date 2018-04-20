import { combineReducers } from 'redux';

// Reducers //

import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;