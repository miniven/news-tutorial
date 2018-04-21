import { SET_NEWS } from '../types/news';

// Data //

import initialNews from '../news.json';

const newsReducer = (state = initialNews, { type, data }) => {
  switch (type) {
    case SET_NEWS:
      return data;
    default:
      return state;
  }
};

export default newsReducer;