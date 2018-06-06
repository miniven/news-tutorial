import { USER_LOGGED_IN, USER_LOGGED_OUT, SET_USER_DATA, FETCH_AUTH, FETCH_AUTH_SUCCESS, FETCH_AUTH_FAILED } from '../types/auth';

const userReducer = (state = { data: {}, fetching: null, loaded: null, error: null }, { type, data, error }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        data,
      };
    case USER_LOGGED_OUT: {
      return {
        ...state,
        data: {},
        isLogged: false,
      };
    }
    case SET_USER_DATA:
      return {
        ...state,
        data,
      };
    case FETCH_AUTH:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        fetching: false,
        loaded: true,
        isLogged: true,
      };
    case FETCH_AUTH_FAILED:
      return {
        ...state,
        fetching: false,
        loaded: false,
        isLogged: false,
        error,
      };
    default:
      return state;
  }
};

export default userReducer;