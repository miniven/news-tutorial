import { LOG_IN, USER_LOGGED_IN } from '../types/auth';

export const logIn = data => (
  {
    type: LOG_IN,
    data
  }
);

export const userLoggedIn = data => (
  {
    type: USER_LOGGED_IN,
    data
  }
);