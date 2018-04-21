import { SET_AUTHORS } from '../types/authors';

// Data //

import initialAuthors from '../authors.json';

const authorsReducer = (state = initialAuthors, { type, data }) => {
  switch (type) {
    case SET_AUTHORS:
      return data;
    default:
      return state;
  }
};

export default authorsReducer;