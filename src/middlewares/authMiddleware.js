import { LOG_IN, LOG_OUT } from '../types/auth';

// Actions //

import { userLoggedIn, userLoggedOut } from '../actions/auth';

const authData = {
  username: 'Admin',
  password: '12345'
};

const authMiddleware = store => next => action => {
  if (action.type === LOG_IN) {
    const { data } = action;

    if (data.username === authData.username && data.password === authData.password) {
      store.dispatch(userLoggedIn(data));

      localStorage.setItem('auth', JSON.stringify(data));

      return {
        status: 'OK'
      };
    } else {
      return {
        errors: ['Логин или пароль введены некорректно']
      };
    }
  }

  if (action.type === LOG_OUT) {
    store.dispatch(userLoggedOut());
    localStorage.removeItem('auth');
  }

  next(action);
};

export default authMiddleware;