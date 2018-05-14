import { SET_NEWS } from '../types/news';
import API from '../api/';

export const getNews = () => dispatch => {
  return API.news.getNews()
    .then(response => response.data)
    .then(response => {
      if (response.status === 'ok') {
        dispatch(setNews(response.data));
      }

      return response;
    });
};

export const setNews = data => ({
  type: SET_NEWS,
  data
});