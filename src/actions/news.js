import { SET_NEWS } from '../types/news';

export const setNews = data => (
  {
    type: SET_NEWS,
    data
  }
);