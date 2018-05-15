import { USER_LOGGED_IN, USER_LOGGED_OUT, SET_USER_DATA } from '../types/auth';

const userReducer = (state = {}, { type, data }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return data;
    case USER_LOGGED_OUT:
      return {};
    case SET_USER_DATA:
      return {
        ...state,
        userData: data
      };
    default:
      return state;
  }
};

export default userReducer;