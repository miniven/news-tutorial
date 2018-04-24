import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/auth';

// Thunks //

export const logIn = data => dispatch => {
  return new Promise((resolve, reject) => {
    const authData = {
      username: 'Admin',
      password: '12345'
    };

    setTimeout(() => {
      if (data.username === authData.username && data.password === authData.password) {
        dispatch(userLoggedIn(data));
        localStorage.setItem('auth', JSON.stringify(data));

        resolve({
          status: 'OK'
        });
      };

      reject({
        status: 'BAD',
        errors: ['Логин или пароль введены некорректно']
      });
    }, 1000);
  });
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