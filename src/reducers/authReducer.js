import { AUTH_LOGGED_IN, AUTH_LOGGED_OUT, FETCH_AUTH, FETCH_AUTH_SUCCESS, FETCH_AUTH_FAILED } from '~/types/auth';

const authReducer = (state = { data: {}, fetching: null, error: null }, { type, data, error }) => {
  switch (type) {
    case AUTH_LOGGED_IN:
      return {
        ...state,
        data,
        isLogged: true,
      };
    case AUTH_LOGGED_OUT: {
      return {
        ...state,
        data: {},
        isLogged: false,
      };
    }
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
        isLogged: true,
      };
    case FETCH_AUTH_FAILED:
      return {
        ...state,
        fetching: false,
        isLogged: false,
        error,
      };
    default:
      return state;
  }
};

export default authReducer;