import { SET_AUTHORS } from '../types/authors';

// Data //

import initialAuthors from '../authors.json';

// На данный момент этот редюсер не нужен (я использовал его в первом тестовом), но я пока оставлю его с расчётом, что он может понадобиться впоследствии

const authorsReducer = (state = initialAuthors, { type, data }) => {
  switch (type) {
    case SET_AUTHORS:
      return data;
    default:
      return state;
  }
};

export default authorsReducer;