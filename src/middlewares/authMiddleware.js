import { LOG_IN } from '../types/auth';

// Actions //

import { userLoggedIn } from '../actions/auth';

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

  next(action);
};

export default authMiddleware;