import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/auth';

// Thunks //

export const logIn = data => dispatch => {
  const authData = {
    username: 'Admin',
    password: '12345'
  };

  if (data.username === authData.username && data.password === authData.password) {
    dispatch(userLoggedIn(data));
    localStorage.setItem('auth', JSON.stringify(data));

    return {
      status: 'OK'
    };
  };

  return {
    status: 'BAD',
    errors: ['Логин или пароль введены некорректно']
  };
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