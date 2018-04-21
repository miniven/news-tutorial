import { SET_AUTHORS } from '../types/authors';

export const setAuthors = data => (
  {
    type: SET_AUTHORS,
    data
  }
);