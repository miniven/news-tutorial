import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/auth';
import API from '../api/';

// Thunks //

export const logIn = data => dispatch => {
  return API.user.logIn(data)
    .then(response => response.data)
    .then(data => {
      if (data.status === 'ok') {
        dispatch(userLoggedIn(data));
        localStorage.setItem('userId', data.userId);

        return data;
      }
    })
};

export const logOut = () => dispatch => {
  dispatch(userLoggedOut());
  localStorage.removeItem('auth');
};

// Action creators //

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