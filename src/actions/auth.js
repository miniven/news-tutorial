import { AUTH_LOGGED_IN, AUTH_LOGGED_OUT, FETCH_AUTH, FETCH_AUTH_SUCCESS, FETCH_AUTH_FAILED } from '../types/auth';
import API from '../api/';

// Thunks //

export const logIn = data => dispatch => {
  dispatch(fetchAuth());

  return API.user.logIn(data)
    .then(response => response.data)
    .then(response => {
      if (response.status === 'ok') {
        const authData = {
          ...response.data,
        };

        dispatch(userLoggedIn(authData));
        dispatch(setSuccessResult());
        localStorage.setItem('auth', JSON.stringify(authData));
      } else {
        dispatch(setFailResult(response.message));
      }

      return response;
    });
};

export const logOut = () => dispatch => {
  dispatch(userLoggedOut());

  localStorage.removeItem('auth');
};

// Action creators //

export const userLoggedIn = data => ({
  type: AUTH_LOGGED_IN,
  data
});

export const userLoggedOut = () => ({
  type: AUTH_LOGGED_OUT
});

export const fetchAuth = () => ({
  type: FETCH_AUTH
});

export const setSuccessResult = () => ({
  type: FETCH_AUTH_SUCCESS
});

export const setFailResult = (error) => ({
  type: FETCH_AUTH_FAILED,
  error,
});
