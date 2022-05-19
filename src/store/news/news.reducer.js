import { NEWS_ACTION_TYPES } from "./news.types";

const INITIAL_STATE = {
  isLoading: false,
  news: [],
  error: null,
};

export const newsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEWS_ACTION_TYPES.FETCH_NEWS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        news: payload,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
