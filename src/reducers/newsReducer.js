import { SET_NEWS, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '~/types/news';

// Data //

const newsReducer = (state = { data: [], fetching: false, error: null }, { type, data, error }) => {
  switch (type) {
    case SET_NEWS:
      return {
        ...state,
        data,
      };
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        loaded: true,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        fetching: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};

export default newsReducer;