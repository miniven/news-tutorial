import { SET_USER_DATA, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from '~/types/user';
import API from '~/api/';

export const getUserData = id => dispatch => {
  dispatch(fetchUserData());

  return API.user.getData(id)
    .then(response => response.data)
    .then(response => {
      if (response.status === 'ok') {
        dispatch(setUserData(response.data));
        dispatch(setSuccessResult());
      } else {
        dispatch(setFailResult(response.message));
      }

      return response;
    })
    .catch(() => {
      dispatch(setFailResult('network_error'));
    });
};

export const setUserData = data => ({
  type: SET_USER_DATA,
  data
});

export const fetchUserData = () => ({
  type: FETCH_USER
});

export const setSuccessResult = () => ({
  type: FETCH_USER_SUCCESS
});

export const setFailResult = (error) => ({
  type: FETCH_USER_FAILED,
  error,
});
