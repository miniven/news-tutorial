import { SET_NEWS, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '~/types/news';
import API from '~/api/';

export const getNews = () => dispatch => {
  dispatch(fetchData());

  return API.news.getNews()
    .then(response => response.data)
    .then(response => {
      if (response.status === 'ok') {
        dispatch(setNews(response.data));
        dispatch(setSuccessResult());
      } else {
        dispatch(setFailResult('network_error'));
      }

      return response;
    })
    .catch(() => {
      dispatch(setFailResult('network_error'));
    });
};

export const setNews = data => ({
  type: SET_NEWS,
  data
});

export const fetchData = () => ({
  type: FETCH_DATA
});

export const setSuccessResult = () => ({
  type: FETCH_DATA_SUCCESS
});

export const setFailResult = (error) => ({
  type: FETCH_DATA_FAILED,
  error,
});