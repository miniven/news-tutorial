import { SET_USER_DATA, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '~/types/user';

const userReducer = (state = { data: {}, fetching: true, error: null }, { type, data, error }) => {
  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        data,
      };
    case FETCH_USER:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        fetching: false,
        error,
      };
    default:
      return state;
  }
};

export const getSortedSocial = (state) => {
  const { social } = state.user.data;

  if (!social) {
    return null;
  }

  return [...social].sort((current, next) => {
    return current.label === 'web' ? -1 : 1;
  });
};

export const getUserID = (state) => {
  const { id } = state.auth.data;

  return id !== undefined ? id : null;
}

export default userReducer;