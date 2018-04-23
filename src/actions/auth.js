import { LOG_IN, LOG_OUT, USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/auth';

export const logIn = data => (
  {
    type: LOG_IN,
    data
  }
);

export const logOut = () => (
  {
    type: LOG_OUT
  }
);

export const userLoggedIn = data => (
  {
    type: USER_LOGGED_IN,
    data
  }
);

export const userLoggedOut = () => (
  {
    type: USER_LOGGED_OUT
  }
);