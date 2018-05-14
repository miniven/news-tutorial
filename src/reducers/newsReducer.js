import { SET_NEWS } from '../types/news';

// Data //

const newsReducer = (state = [], { type, data }) => {
  switch (type) {
    case SET_NEWS:
      return data;
    default:
      return state;
  }
};

export default newsReducer;