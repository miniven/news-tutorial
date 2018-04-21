import { USER_LOGGED_IN } from '../types/auth';

const userReducer = (state = {}, { type, data }) => {
  // Не уверен, что это должно быть здесь.
  state = JSON.parse(localStorage.getItem('auth')) || state;

  switch (type) {
    case USER_LOGGED_IN:
      return data;
    default:
      return state;
  }
};

export default userReducer;