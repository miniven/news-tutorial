import { USER_LOGGED_IN, USER_LOGGED_OUT, SET_USER_DATA } from '../types/auth';
import API from '../api/';

// Thunks //

export const logIn = data => dispatch => {
  return API.user.logIn(data)
    .then(response => response.data)
    .then(response => {
      if (response.status === 'ok') {
        const authData = {
          ...response.data,
          isLogged: true
        };

        dispatch(userLoggedIn(authData));
        localStorage.setItem('auth', JSON.stringify(authData));
      }

      return response;
    })
};

export const logOut = () => dispatch => {
  dispatch(userLoggedOut());
  localStorage.removeItem('auth');
};

export const getUserData = id => dispatch => {
  API.user.getData(id)
    .then(response => response.data)
    .then(response => {
      if (response.status === 'ok') {
        dispatch(setUserData(response.data));
      }
    })
};

// Action creators //

export const userLoggedIn = data => ({
  type: USER_LOGGED_IN,
  data
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const setUserData = data => ({
  type: SET_USER_DATA,
  data
});